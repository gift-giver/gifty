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
        console.log(e.target.value);
        const info = this.props.itemInfo;
         let myChoice = {}
         for (let key in info) {
             if (info[key] != undefined) {
                 myChoice[key] = info[key];
             }
         }
        
        console.log(myChoice.id);

         console.log(e.key)

        const checkUserChoice = []
        if (checkUserChoice.includes(info) === false) {
            checkUserChoice.push(info)
        } else {
           console.log('You already have this') 
        }



        const userChoice = []
        if (userChoice.length === 10) {
            alert('you cant have more than 10!')
        } else {
            userChoice.push(info);
        }
        
        console.log(userChoice);
      


        // const dbRef = firebase.database().ref(`GuestList`);
        // dbRef.push(myChoice);
      
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
                      
                        <button onClick={this.pushToFirebase} key={this.props.itemInfo.id}>Add To List</button>
                        {

                        }
                       
                   
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