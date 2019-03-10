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

   


    render(){
        return (
            <React.Fragment>
                <div className="backgroundBlur"></div>
                <div className="itemModal">
                    <button className="closeModal"
                        onClick={this.props.onModalClose}>
                        X</button> 
                    <img src={this.props.itemInfo.image_url} alt={this.props.itemInfo.name}></img>
                    <div className='modalInfoContainer'>
                        <h2>{this.props.itemInfo.name}</h2>
                        <p>{this.props.itemInfo.rating}</p>
                      
                        <button onClick={() => this.props.pushToFirebase(this.props.itemInfo)} key={this.props.itemInfo.id}>Add To List</button>
                   
                    </div>
              
                    
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