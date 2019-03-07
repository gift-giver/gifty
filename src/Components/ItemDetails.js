import React, { Component } from 'react';

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
                        <i class="far fa-times-circle"></i></button> 
                    <img src={this.props.itemInfo.image} alt={this.props.itemInfo.name}></img>
                    <div className='modalInfoContainer'>
                        <h2>{this.props.itemInfo.name}</h2>
                        <p>{this.props.itemInfo.rating}</p>
                     
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