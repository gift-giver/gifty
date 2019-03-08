import React, { Component } from 'react';
import ItemCard from './ItemCard.js';
import ItemDetails from './ItemDetails.js';

class Main extends Component {

  constructor(){
    super();

    this.state = {
      modalIsHidden: true,
      modalData: {}
    }
  }

  onClickToModal = (info) => {
    // console.log(info)
    this.setState({
      modalData: info,
      modalIsHidden: false
    })
  }

  onModalClose = () => {
    this.setState({
      modalData: {},
      modalIsHidden:true
    })
  }

  render() {
    return (
      <div className="mainContainer">
        <ul className="galleryGrid">
          {
            this.props.itemInfo.map((info) => {
              return (  
                <li 
                  key={info.id}
                  onClick={() => this.onClickToModal(info)}
                >
                  <ItemCard
                    itemInfo={info}
                    
                    />
                </li>
              )
            })
          }

        </ul>

        {this.state.modalIsHidden === false ? <ItemDetails itemInfo={this.state.modalData} onModalClose={this.onModalClose}/> : null}
      </div>
    );
  }
}
export default Main;