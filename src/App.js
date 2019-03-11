// import components
import React, { Component } from 'react';
import MainApp from './Components/MainApp.js';
import MyList from './Components/MyList.js';
import LoginPage from './Components/LoginPage.js';
import axios from 'axios';
// import router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from './firebase.js';
// import styles
import './App.css';


class App extends Component {
  constructor() {
    super();
    //mainSearchBar stores user query. resultInfo is the filtered data from the API, it's an array of objects.
    this.state = {
      mainSearchBar: "",
      resultInfo: [],
      searchLocation: "Toronto",
      price: "0",
      rating: "0",
      filteredResultInfo: [],
      userChoice: '',
      userList: [],
      firebaseListId: ""

    }
  }

  componentDidMount() {
    // reference firebase list; reference structure: GuestList -> newUserCreatedList
    const dbRef = firebase.database().ref(`GuestList/${this.state.firebaseListId}`);

    dbRef.on('value', response => {

      const returnedList = [];

      const data = response.val();

      for (let key in data) {

        returnedList.push({
          key: key,
          restaurantInfo: data[key]
        })
      }

      this.setState({
        userList: returnedList
      })

    })
  }

  componentDidUpdate(prevProps, prevState) {
    // if prevState.rating or prevState.price isn't equal to what was specified by user: run this function
    if (prevState.rating !== this.state.rating || prevState.price !== this.state.price) {

      this.filterByRating(this.state.resultInfo);
    }
  }

  // * EVENT HANDLERS * //
  //function to trigger axios call, following click of the submit button.
  handleSearchSubmit = async (event) => {

    event.preventDefault();

    //data is the return from the axios call; await keyword means that promise must be resolved before value is set.
    const data = await this.getSearchData(this.state.mainSearchBar, this.state.searchLocation);

    // taking data from the axios call to be filtered
     this.filterByRating(data)
    //setting the state with the return from the axios call.
    this.setState({

      resultInfo: data

    })
    if (data.length === 0) {
      alert("there are no results for this search" );
    }
  }

  onFocus = (event) => {

    this.setState({
      [event.target.name]: ""
    })
  }

  //on change sets the state based on input value.
  handleOnChangeEvents = (event) => {

    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  //axios call; user queries params passed in from mainSearchBar state.
  getSearchData = async (userQuery, locationQuery) => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const listingUrl = 'https://api.yelp.com/v3/businesses/search';

    try {
      const listingSearch = await axios.get(proxyUrl + listingUrl, {
        headers: {
          Authorization: `Bearer C7ZMd1ea7H3n1WxoD9MdVAa65MTz612MaPEKj6qOBy5hc0-JnSd76Svxv_7AoNH6_Y15XalttVt4pAvRadbAoSINmO2SttL2cJTTWNnONjEFv0CMS2OIeFJYZVKAXHYx `,
        },
        params: {
          method: 'GET',
          offset: 1,
          limit: 20,
          location: locationQuery,
          term: userQuery,
          categories: 'restaurants, All',
          open_now: true,
          image_url: true

          // attributes:"gender_neutral_restrooms",
          // attributes:"open_to_all",
          // attributes:"wheelchair_accessible",
          // attributes:"hot_and_new"
        }
      })
      console.log(userQuery);
      const listingResults = await listingSearch["data"]["businesses"];

      // filter out keys with a value of undefined; causes problems when pushing to firebase
      const placeInfo = listingResults.map((place) => {

        let filteredResults = {};

        for (let key in place) {
          if (place[key] !== undefined) {
            filteredResults[key] = place[key];
          }
        }
        // return filteredResults as the result of the map operation, new list info held within placeInfo
        return filteredResults
      })

      // return placeInfo to caller -> used to set state
      return placeInfo
    }
    catch (error) {
      console.log(error)
    }
  }

  filterByRating = (infoArray) => {
    // acting on infoArray, infoArray is 1 of 2 values, either the value from state or data directly from axios call
    // in here we are comparing the rating from the original data call to the rating specified by user which is held in state
    const filteredArray = infoArray.filter((item) => {

      return (
        item.rating >= Number(this["state"]["rating"])
        && item["price"] !== undefined
        && item["price"].length >= Number(this["state"]["price"])
      )
    })

    // use the array created by filter to set the state
    this.setState({
      filteredResultInfo: filteredArray
    })

  };

  // * FIREBASE FUNCTIONS * //
  // create a new firebase list 
  createNewFirebaseList = () => {
    // reference firebase object in which all  guest lists will live
    const dbRef = firebase.database().ref(`GuestList`);
    // new firebase list will live inside an object, reference by firebase provided key
    const newFirebaseList = {}
    // push new list to firebase reference, hold created firebase reference key for that object in variable firebaseKey
    const firebaseKey = dbRef.push(newFirebaseList)
    // set state with current firebaseKey; allows session to save to one list which is later deletable
    this.setState({
      firebaseListId: firebaseKey["path"]["pieces_"][1]
    })
  }

  // push item to firebase 
  pushToFirebase = (itemInfo) => {

    const dbRef = firebase.database().ref(`GuestList/${this["state"]["firebaseListId"]}`);

    dbRef.push(itemInfo);
  }

  // remove selected item from firebase; firebase key used as id on button, accessed by event.target.id
  removeFromFirebase = (event) => {
    
    const key = event["target"]["id"]
    const dbRef = firebase.database().ref(`GuestList/${this["state"]["firebaseListId"]}/${key}`);

    dbRef.remove()
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={() => { return (<LoginPage createNewFirebaseList={this.createNewFirebaseList} />) }} />
          <Route path="/MainApp" render={() => {
            return (<MainApp

              onSearchSubmit={this.handleSearchSubmit}
              onTextInput={this.handleOnChangeEvents}
              onFocus={this.onFocus}
              textInputValue={this.state.mainSearchBar}
              searchLocationInput={this.state.searchLocation}
              priceValue={this.state.price}
              ratingValue={this.state.rating}
              itemInfo={this.state.filteredResultInfo}
              pushToFirebase={this.pushToFirebase} />)
          }}
          />

          <Route path="/MyList" render={() => {
            return (
              <MyList
                userList={this.state.userList}
                removeFromFirebase={this.removeFromFirebase} />
            )
          }} />

        </div>
      </Router>
    )
  }
}

export default App;