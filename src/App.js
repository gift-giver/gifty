// import components
import React, { Component } from 'react';
import MainApp from './Components/MainApp.js';
import MyList from './Components/MyList.js';
import LoginPage from './Components/LoginPage.js';
import axios from 'axios';
// import router
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import firebase from './firebase.js';
// import styles
import './App.css'; 


class App extends Component {
  constructor(){
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
              userList: []

  }
}



  async componentDidMount() {

    const dbRef = await firebase.database().ref(`GuestList`);
    dbRef.on('value', response => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push({
          key: key,
          title: data[key]
        })
      }

      this.setState({
        userList: newState
      })

    })
  }



  componentDidUpdate(prevProps, prevState) {
    //if prevState.rating isn't' equal to what was specified by user run this function. Stops continuous loop
    if (prevState.rating !== this.state.rating || prevState.price !== this.state.price) {

      this.filterByRating(this.state.resultInfo);
    }
  }
  //function to trigger axios call, following click of the submit button.
  handleSearchSubmit = async (event) => {

    event.preventDefault();

    const price = this.state.price !== "0" ? this.state.price : null

    //data is the return from the axios call; await keyword means that promise must be resolved before value is set.
    const data = await this.getSearchData(this.state.mainSearchBar, this.state.searchLocation);

    // taking data from the axios call to be filtered
    const filteredData = this.filterByRating(data)
    //setting the state with the return from the axios call.
    this.setState({

      resultInfo: data
    })
  }

  onFocus = (event) => {

    this.setState({
      [event.target.name]: ""
    })
  }

  //on change sets the state based on input value.
  handleTextInput = (event) => {

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
          categories: 'food, All',
          open_now: true,
          image_url: true

          // attributes:"gender_neutral_restrooms",
          // attributes:"open_to_all",
          // attributes:"wheelchair_accessible",
          // attributes:"hot_and_new"
        }
      })
      const listingResults = await listingSearch["data"]["businesses"];

      //create an object with relevant data to push to state.
      const placeInfo = listingResults.map((place) => {

        let filteredResults = {};

        for (let key in place) {
          if (place[key] !== undefined) {
            filteredResults[key] = place[key];
          }
        }
        return filteredResults
      })
    
      return (placeInfo)
      
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
        item.rating >= Number(this.state.rating) && item.price != undefined && item.price.length >= Number(this.state.price)
      )
    })
    this.setState({
      // use the array created by filter to set the state
      filteredResultInfo: filteredArray
    })

  };

  pushToFirebase = (itemInfo) => {

    const dbRef = firebase.database().ref(`GuestList`);
    dbRef.push(itemInfo);
  }

  removeFromFirebase = (event) => {
    const key = event.target.id

    const dbRef = firebase.database().ref(`GuestList/${key}`);
    dbRef.remove()

  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={LoginPage}/>
          <Route path="/MainApp" render={() => { return (<MainApp 

            onSearchSubmit={this.handleSearchSubmit}
            onTextInput={this.handleTextInput}
            onFocus={this.onFocus}
            textInputValue={this.state.mainSearchBar}
            searchLocationInput={this.state.searchLocation}
            priceValue={this.state.price}
            ratingValue={this.state.rating}
            itemInfo={this.state.filteredResultInfo}
            ratingValue={this.state.rating}
            pushToFirebase={this.pushToFirebase}/>)}}
          />

          <Route path="/MyList" render={() => { return (
            <MyList 
               userList={this.state.userList} 
               removeFromFirebase={this.removeFromFirebase}/> 
          )}}/>
        
       </div>
      </Router>
    )
  }
}
export default App;