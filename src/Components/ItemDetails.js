import React, { Component } from 'react';

class ItemDetails extends Component {
    constructor(){
        super();

        this.state = {

        }
    }



    render(){
        return(
            <div className="itemModal">
                <h1>{this.props.itemInfo.name}</h1>
            </div>
        )
    }
}

export default ItemDetails;