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
      resultInfo: [],
    }
  }

  componentDidMount() {

  }

  handleSearchSubmit = async (event) => {

    event.preventDefault();

    const data = await this.getSearchData(this.state.mainSearchBar)
    this.setState({
     
      resultInfo: data
    })
  }

  handleTextInput = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onFocus = (e) => {
    console.log('working')
    this.setState({
       mainSearchBar: "",
    })
  }

  getSearchData = async (userQuery) => {

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const listingUrl = 'https://openapi.etsy.com/v2/listings/active';

    try {
      const listingSearch = await axios.get(proxyUrl + listingUrl, {
        params: {
          api_key: '4jabbvn0odt4iogwe763zl4m',
          method: 'GET',
          offset: 20,
          limit: 20,
          state: 'active',
          keywords: userQuery,
          includes: "Images"
        }
      })
      const listingResults = await listingSearch["data"]["results"];
      console.log(listingResults);

     

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
          onFocus={this.onFocus}
          textInputValue={this.state.mainSearchBar}
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