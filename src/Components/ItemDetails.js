import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MyList from './MyList.js';
import firebase from './../firebase.js'

class ItemDetails extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    pushToFirebase = (e) => {
        const info = this.props.itemInfo;
        let myChoice = {}
        for (let key in info) {
            if (info[key] != undefined) {
                myChoice[key] = info[key];
            }
        }
      


        const dbRef = firebase.database().ref(`GuestList`);
        dbRef.push(myChoice);
      
    }


    render(){
        return (
            <React.Fragment>
                <div className="backgroundBlur"></div>
                <div className="itemModal">
                    <button className="closeModal"
                        onClick={this.props.onModalClose}>
                        X</button> 
                    <img src={this.props.itemInfo.image} alt={this.props.itemInfo.name}></img>
                    <div className='modalInfoContainer'>
                        <h2>{this.props.itemInfo.name}</h2>
                        <p>{this.props.itemInfo.rating}</p>
                       
                   
                    </div>
                    <button onClick={this.pushToFirebase}>Add To List</button>
                    
                </div>
            </React.Fragment>
        )
    }
}

//   price: place.price,
//       image: place.image_url,
//       category: place.category,
//       url: place.url,
//       rating: place.rating,
//       name: place.name,
//       id: place.id,
//       address: place.location.displayAddress

export default ItemDetails;