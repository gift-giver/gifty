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
                            X</button> 
                    <h1>{this.props.itemInfo.name}</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default ItemDetails;