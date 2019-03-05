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

    this.state = {
      mainSearchBar: "",

    }
  }

  componentDidMount() {

  }

  handleSearchSubmit = async (event) => {

    event.preventDefault();

    const data = await this.getSearchData(this.state.mainSearchBar)
    console.log(data)
    this.setState({
      mainSearchBar: ""
    })
  }

  handleTextInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getSearchData = async (userQuery) => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const listingUrl = 'https://openapi.etsy.com/v2/listings/active';
    // const apiImgUrl = 'https://openapi.etsy.com/v2/listings/:listing_id/images/';

    try {
      const listingSearch = await axios.get(proxyUrl + listingUrl, {
        params: {
          api_key: '4jabbvn0odt4iogwe763zl4m',
          method: 'GET',
          offset: 20,
          limit: 20,
          state: 'active',
          keywords: userQuery,
          includes:"Images"
        }
      })
      const listingResults = await listingSearch["data"]["results"]
      // const imageSearchData = listingResults[0].listing_id

      // const imageSearch = await axios.get(proxyUrl + apiImgUrl, {
      //   params: {
      //     api_key: '4jabbvn0odt4iogwe763zl4m',
      //     method: 'GET',
      //     listing_id: imageSearchData,
      //   }
      // })
      // const imageResults = await imageSearch["data"]["results"]

      return  (listingResults)
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
        />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;