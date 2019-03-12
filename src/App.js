// import components
import React, { Component } from 'react';
import MainApp from './Components/MainApp.js';
import MyList from './Components/MyList.js';
import LoginPage from './Components/LoginPage.js';
//dependencies
import axios from 'axios';
import Swal from 'sweetalert2';

// import router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from './firebase.js';
// import styles
import './App.css';


class App extends Component {
  constructor() {
    super();
    //mainSearchBar stores user query. resultInfo is the filtered data from the API, it's an array of objects.
    this.state = {
      firebaseListId: "",
      cuisineTextInput: "",
      locationTextInput: "Toronto",
      price: "0",
      rating: "0",
      resultInfo: [],
      filteredResultInfo: [],
      userList: [],
      userChoice: '',
      userName:"",
      redirect: false,
      modalContentData: {},
      modalContentIsHidden: true
    }
  } 

  componentDidMount() {
    
    const getFirebaseKey = localStorage.getItem("key")
    const storedFirebaseKey = JSON.parse(getFirebaseKey)
    this.setState({
      firebaseListId: storedFirebaseKey
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
    const data = await this.getSearchData(this.state.cuisineTextInput, this.state.locationTextInput);
    // taking data from the axios call to be filtered
    this.filterByRating(data)
    //setting the state with the return from the axios call.
    this.setState({
      resultInfo: data
    })
    if (data.length === 0) {
      Swal.fire(`Sorry, no results for ${this.state.cuisineTextInput}. Try again!`)
    }
  }

  // on focus of text inputs, clear input value
  handleFocusEvent = (event) => {
    
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

  getUserName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  // handleNewListClick = (event) => {
  //   event.preventDefault();
  //   console.log("click")
  // }

  // handleNewListKeyPress = (event) => {
  //   event.preventDefault();
  //   if(event.charCode === 13){
  //     console.log('keypress')
  //   }
 
  // }

// * FIREBASE FUNCTIONS * //
// create a new firebase list 
createNewFirebaseList = (event) => {
  
  // reference firebase object in which all  guest lists will live
  const dbRef = firebase.database().ref(`GuestList`);
  // new firebase list will live inside an object, reference by firebase provided key
  const newFirebaseList = {
    userName: this.state.userName
  }
  // push new list to firebase reference, hold created firebase reference key for that object in variable firebaseKey
  const firebaseKey = dbRef.push(newFirebaseList)
  console.log(firebaseKey.key)
  this.initialFirebaseCall(firebaseKey.key)
  // set state with current firebaseKey; allows session to save to one list which is later deletable
  
  const storedFirebaseKey = JSON.stringify(firebaseKey.key)
  localStorage.setItem("key", storedFirebaseKey)
  this.setState({
    firebaseListId: firebaseKey.key,
    redirect: false
  })
}

initialFirebaseCall = (firebaseKey) => {
  // reference firebase list; reference structure: GuestList -> newUserCreatedList
  const dbRef = firebase.database().ref(`GuestList/${firebaseKey}`);
  dbRef.on('value', response => {
    // create a new array for items from firebase to be pushed to
    const returnedList = [];
    // a vraible that holds the info returned from firebase
    const data = response.val();
    // 2 for..in loops are required to access the info we have nested; 
    //push values to new array, key for quick reference when deleting and restaurnat data used for display in MyLIst
    for (let key in data) {
      if (typeof data[key] !== "string") {
        returnedList.push({
          key: key,
          restaurantInfo: data[key]
        })
      }
    }
    // set state with newly created array of firbase returned items; used to display list content in MyList
    this.setState({
      userList: returnedList,
      // firebaseListId: firebaseKey
    })
  })
}
  checkuserList = (itemInfo) => {
   return this.state.userList.filter((item) => {
      return item.restaurantInfo.id === itemInfo.id
    })
  }

  // push item to firebase 
  pushToFirebase = (itemInfo) => {
    const listCheck = this.checkuserList(itemInfo);
    console.log(!listCheck);

    if(this.state.userList.length + 1 <= 10 ){
      console.log(this.state.userList.length + 1)
      const dbRef = firebase.database().ref(`GuestList/${this["state"]["firebaseListId"]}`);
      
      
      dbRef.push(itemInfo);
      
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Your choice has been saved!',
        showConfirmButton: false,
        timer: 1500
      })

      this.setState({
        modalContentData: { },
        modalContentIsHidden: true
      })
    
    } else {
      
      // if (this.state.userList.length + 1 <= 10){
        alert("You may only have 10 items in your list, please remove one to add a new item")
      // } else if (!listCheck === false) {
      //   alert("You've already got this!")
      // }
      
    }
  }

  // remove selected item from firebase; firebase key used as id on button, accessed by event.target.id
  removeFromFirebase = (event) => {
    
    const key = event["target"]["id"]
    const dbRef = firebase.database().ref(`GuestList/${this["state"]["firebaseListId"]}/${key}`);

    dbRef.remove()
  }

  removeFullListFromFirebase = (event) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
         "Your list has been deleted. Create a new one! ",
          this.confirmFullListFirebaseDelete(),

          this.setState({
            redirect: true,
            firebaseListId: "",
            userName: "",
            cuisineTextInput: "",
            resultInfo: [],
            filteredResultInfo: [],
          }),

          
        )
      }
    })

    

          

    
  }
  
  confirmFullListFirebaseDelete = () => {
    const dbRef = firebase.database().ref(`GuestList/${this["state"]["firebaseListId"]}`);

    dbRef.remove();
  }
  
  renderRedirect = () => {

    if (this.state.redirect){
      return <Redirect to="/" />
    }
   
  }
  
  // mainRenderRedirect = () => {
  //   if(this.state.userName){
  //     return <Redirect to="/MainApp" />
  //   }
  // }
  

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={() => {
            return (<LoginPage 
              getUserName={this.getUserName}
              userName={this.state.userName}
              onChangeEvent={this.handleOnChangeEvents}
              handleNewListClick={this.handleNewListClick}
              handleNewListKeyPress={this.handleNewListKeyPress}
              createNewFirebaseList={this.createNewFirebaseList} 
            
          />) }} />

          
          <Route path="/MainApp" render={() => {
            return (
              <MainApp
                onSearchSubmit={this.handleSearchSubmit}
                onChangeEvent={this.handleOnChangeEvents}
                onFocusEvent={this.handleFocusEvent}
                cuisineTextInputValue={this.state.cuisineTextInput}
                locationTextInputValue={this.state.locationTextInput}
                priceValue={this.state.price}
                ratingValue={this.state.rating}
                itemInfo={this.state.filteredResultInfo}
                pushToFirebase={this.pushToFirebase} 
                modalContentData={this.state.modalData}
                modalContentIsHidden={this.state.modalIsHidden}
                
        />)
    }} />
          {this.renderRedirect()}
          <Route path="/MyList" render={() => {
            return (
              <MyList
                userList={this.state.userList}
                removeFromFirebase={this.removeFromFirebase} 
                userName={this.state.userName}
                removeFullListFromFirebase={this.removeFullListFromFirebase}
              />
            )
          }} />
          
        </div>
      </Router>
    )
  }
}

export default App;