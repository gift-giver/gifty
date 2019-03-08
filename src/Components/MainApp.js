import React, { Component } from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
import MyList from './MyList.js';
// import dependencies
import axios from 'axios';
import firebase from './../firebase.js';
import { Route, Link } from 'react-router-dom';

class MainApp extends Component {

    constructor(){
        super();
        //mainSearchBar stores user query. resultInfo is the filtered data from the API, it's an array of objects.
        this.state = {
            mainSearchBar: "",
            resultInfo: [],
            searchLocation: "Toronto",
            price: "0",
            rating: "0",
            filteredResultInfo:[]
        }
    }


    componentDidUpdate(prevProps, prevState){
        //if prevState.rating isn't' equal to what was specified by user run this function. Stops continuous loop
        if(prevState.rating !== this.state.rating || prevState.price !== this.state.price){

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


    userChoice = (e) => {
        this.setState({
            userChoice: e.target.value
        }, () => {
                const placeChoice = this.state.data = this.state.data.filter(res => {
                    // return res.name === this.state.userChoice
                    console.log(res);

                });
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
                return {
                    price: place.price,
                    image: place.image_url,
                    category: place.category,
                    url: place.url,
                    rating: place.rating,
                    name: place.name,
                    id: place.id,
                    address: place.location.displayAddress
                }
            })
            return (placeInfo)
        }
        catch (error) {
            console.log(error)
        }
    }

    filterByRating = (infoArray) =>{
        // acting on infoArray, infoArray is 1 of 2 values, either the value from state or data directly from axios call
        // in here we are comparing the rating from the original data call to the rating specified by user which is held in state
        const filteredArray = infoArray.filter((item) => {
            return(
                item.rating >= Number(this.state.rating) && item.price != undefined && item.price.length >= Number(this.state.price)
            )
        })
        this.setState({
            // use the array created by filter to set the state
            filteredResultInfo: filteredArray
        })

    };

    render(){

        return(
            <div className="gifty-app">
                 <Header
                    onSearchSubmit={this.handleSearchSubmit}
                    onTextInput={this.handleTextInput}
                    onFocus={this.onFocus}
                    textInputValue={this.state.mainSearchBar}
                    searchLocationInput={this.state.searchLocation}
                    priceValue={this.state.price}
                    ratingValue={this.state.rating}
                />
                
                <Main
                    itemInfo={this.state.filteredResultInfo}
                    ratingValue={this.state.rating}
                />
                <Footer />
            </div>
        )
    }

}


export default MainApp;