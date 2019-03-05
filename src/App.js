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
      imageUrl: '',
      itemDescription: ''
    }
  }

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const listingUrl = 'https://openapi.etsy.com/v2/listings/active'

     axios.get(proxyUrl + listingUrl, {
         params: {
           api_key: '4jabbvn0odt4iogwe763zl4m',
           method: 'GET',
           offset: 20,
           limit: 20,
           state: 'active',
           keywords: 'pants'
         }
       })
       .then((result) => {
        console.log(result.data.results)
         const itemDescription = result.data.results[1].title
         this.setState({
           itemDescription: itemDescription
         })

         const results = result.data.results[1].listing_id
         const apiImgUrl = 'https://openapi.etsy.com/v2/listings/:listing_id/images/'

         axios.get(proxyUrl + apiImgUrl, {
           params: {
             api_key: '4jabbvn0odt4iogwe763zl4m',
             method: 'GET',
             listing_id: results,
           }
         }).then((data) => {
           const itemImage = data.data.results[0].url_fullxfull
           this.setState({
             imageUrl: itemImage
           })
         })
       })
  }
  
   
  render() {

    return (
      <div className="gifty-app" >
        <img src={this.state.imageUrl}></img>
        <h2>{this.state.itemDescription}</h2>
      </div> 
    );
  }
}

export default App;