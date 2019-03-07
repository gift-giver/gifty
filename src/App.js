// import components
import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';

// import dependencies
import axios from 'axios';
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
    }
  }

  //function to trigger axios call, following click of the submit button.
  handleSearchSubmit = async (event) => {

    event.preventDefault();
    //data is the return from the axios call; await keyword means that promise must be resolved before value is set.
    const data = await this.getSearchData(this.state.mainSearchBar);
    //setting the state with the return from the axios call.

    
    this.setState({
     
      resultInfo: data
    })
  }
  

  onFocus = () => {
    this.setState({
      mainSearchBar: "",
    })
  }
  //on change sets the state based on input value.
  handleTextInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //axios call; user queries params passed in from mainSearchBar state.
  getSearchData = async (userQuery) => {

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
          location: 'toronto',
          term: userQuery,
        }
      })
      const listingResults = await listingSearch["data"]["businesses"];
      console.log(listingResults)

      //create an object with relevant data to push to state.
      const placeInfo = listingResults.map((place) => {
        return {
          price: place.price,
          image: place.image_url, 
          category: place.category,
          url: place.url,
          rating: place.rating,
          name: place.name,
          id: place.id,
          address:place.location.displayAddress
        }
      })  
      return (placeInfo)    
  }
  catch(error) {
    console.log(error)
  }
}
  
  render() {
    return (
      <div className="gifty-app">
        <Header 
          onSearchSubmit={this.handleSearchSubmit}
          onTextInput={this.handleTextInput}
          onFocus={this.onFocus}
          textInputValue={this.state.mainSearchBar}
          onFocus={this.onFocus}

        />
        <Main
          itemInfo={this.state.resultInfo}
        />
        <Footer />
      </div>
    );
  }
}
export default App;