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
    const listingUrl = 'https://openapi.etsy.com/v2/listings/active';

    try {
      const listingSearch = await axios.get(proxyUrl + listingUrl, {
        params: {
          api_key: '4jabbvn0odt4iogwe763zl4m',
          method: 'GET',
          offset: 1,
          limit: 20,
          state: 'active',
          keywords: userQuery,
          includes: "Images"
        }
      })
      const listingResults = await listingSearch["data"]["results"];

      //create an object with relevant data to push to state.
      const itemInfo = listingResults.map((items) => {
        return {
          price: items.price,
          image: items.Images[0].url_570xN,
          category: items.taxonomy_path,
          url: items.url,
          quantity: items.quantity,
          title: items.title,
          id: items.listing_id
        }
      })  
      return (itemInfo)    
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