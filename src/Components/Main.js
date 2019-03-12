import React, { Component } from 'react';
import ItemCard from './ItemCard.js';
import ItemDetails from './ItemDetails.js';


class Main extends Component {

  constructor(){
    super();

    this.state = {
      modalIsHidden: true,
      modalData: {},
    }
  }


  render() {
    return (

      <div className="mainContainer">
        
        
        <section>
          <ul className="galleryGrid clearfix">
            {
              this.props.itemInfo.map((info) => {
                return (
                  <li
                    key={info.id}
                    onClick={() => this.props.onClickToModal(info)}
                  >
                    <ItemCard
                      itemInfo={info}
                    />
                  </li>
               
                )
              })
            }
            </ul>
            {this.props.modalIsHidden === false ? <ItemDetails
              itemInfo={this.props.modalData}
              handleClick={this.props.handleClick}
              onModalClose={this.props.onModalClose} 
              /> : null}
              

            </section>
      </div>
    );
  }
}
export default Main;