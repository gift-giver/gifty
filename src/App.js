// import componenets
import React, { Component } from 'react';
// import dependencies
import axios from 'axios';
import firebase from './firebase.js';
// import styles
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  async componentDidMount() {

    const data = await this.getSearchData()
    console.log(data);
  }
  getSearchData = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const listingUrl = 'https://openapi.etsy.com/v2/listings/active';
    const apiImgUrl = 'https://openapi.etsy.com/v2/listings/:listing_id/images/';
    try {
      const listingSearch = await axios.get(proxyUrl + listingUrl, {
        params: {
          api_key: '4jabbvn0odt4iogwe763zl4m',
          method: 'GET',
          offset: 20,
          limit: 20,
          state: 'active',
          keywords: 'pants'
        }
      })
      const listingResults = await listingSearch["data"]["results"]
      const imageSearchData = listingResults[0].listing_id
      const imageSearch = await axios.get(proxyUrl + apiImgUrl, {
        params: {
          api_key: '4jabbvn0odt4iogwe763zl4m',
          method: 'GET',
          listing_id: imageSearchData,
        }
      })
      const imageResults = await imageSearch

      return  ({listingResults, imageResults})
    }
    catch(error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="gifty-app">
      </div>
    );
  }
}
export default App;