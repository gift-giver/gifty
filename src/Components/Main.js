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

  onClickToModal = (info) => {

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
        
        
        <section>
          <ul className="galleryGrid clearfix">
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
            {this.state.modalIsHidden === false ? <ItemDetails
              itemInfo={this.state.modalData}
              pushToFirebase={this.props.pushToFirebase}
              onModalClose={this.onModalClose} 
              modalContentData={this.props.modalContentData}
              modalContentIsHidden={this.props.modalContentIsHidden}
              /> : null}
              

            </section>
      </div>
    );
  }
}
export default Main;