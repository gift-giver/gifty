import React, { Component } from 'react';
import ItemCard from './ItemCard.js';
import ItemDetails from './ItemDetails.js';
import { Route, Link } from 'react-router-dom';
import MyList from './MyList.js';
import RandomSelectionModal from './RandomSelectionModal.js';

class Main extends Component {

  constructor(){
    super();

    this.state = {
      modalIsHidden: true,
      modalData: {},
      pageIsHidden: false,

      randomNumber: null,
      randomChoice: '',
      randomModalShow: false
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

  showMyList = () => {
    this.setState({
      pageIsHidden: !this.state.pageIsHidden
    })
  }

  getRanNum = () => {
    return Math.floor(Math.random() * this.props.userList.length) 
  }

  randomizeSelection = () => {
    const randomNumber = this.getRanNum()
    // get random number based on length of array myList
    if (randomNumber !== this.state.randomNumber) {
      
    

      // select piece from that list using index
      const randomChoice = this.props.userList[randomNumber].title;
      // place info in modal that pops up on screen
      console.log(randomChoice);
      this.setState({
        randomNumber: randomNumber,
        randomChoice: randomChoice,
        randomModalShow: true
      })
    } else { this.randomizeSelection() };
  }

  randomModalToggle = () => { 
    console.log(this.state.randomModalSHow)
    this.setState({
      randomModalShow: !this.state.randomModalShow
    })
  }


  render() {
    return (
      <div className="mainContainer">
        {/* <Link to="/MyList">See My List</Link> */}
        
       {this.state.pageIsHidden === false ?
        <section>
          <button onClick={this.showMyList}>See my list</button>
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
            {this.state.modalIsHidden === false ? <ItemDetails
              itemInfo={this.state.modalData}
              pushToFirebase={this.props.pushToFirebase}
              onModalClose={this.onModalClose} /> : null}

            </section>

          :
          <section>
            {
              this.state.randomModalShow === false ? 
                <button onClick={this.randomizeSelection}>Feeling Lucky??</button> :
                null
            }
            

          <button onClick={this.showMyList}>Back to Results</button>
          <ul>
            {
              this.props.userList.map((listItem) => {
               
                return (
                  <li key={listItem.title.id}>
                   
                    <MyList myListItems={listItem}
                      removeFromFirebase={this.props.removeFromFirebase}/>
                      
                  </li>
                )
              })
            }
            </ul>

             {this.state.randomModalShow === true ? <RandomSelectionModal
              randomizeSelection={this.randomizeSelection}
              randomChoice={this.state.randomChoice}
              randomModalToggle={this.randomModalToggle} />
              : null}
            
            </section>
      
}       


        
        
      </div>
    );
  }
}
export default Main;