import React, {Component} from 'react';
import RandomSelectionModal from './RandomSelectionModal.js';
import { Link } from 'react-router-dom';

class MyList extends Component {
    constructor(){
        super();
        this.state = {
            randomNumber: null,
            randomChoice: '',
            randomModalShow: false,
            modalRandData: {},
        }
    }

    onRandModalClose = () => {
        this.setState({
            modalRandData: {},
            randomModalShow: false
        })
    }

    getRandomNumber = () => {

        return Math.floor(Math.random() * this.props.userList.length)
    }

    // triggered by the inital randomize button click; checks userList length for a length greater than 1
    randomizeSelection = () => {

        this.props.userList.length > 1 ? this.getRandomSelection() : alert("There must be more than 1 item in your list to receive a suggestion")
        // get random number based on length of array myList
        // user list must have more than 1 item in it to work
    }

    // called if userList has a length greater than 1 or triggered by the try again button, returns a random selection from userList
    getRandomSelection = () => {

        const randomNumber = this.getRandonNumber()

        if (randomNumber !== this.state.randomNumber) {

            // select piece from that list using index
            const randomChoice = this.props.userList[randomNumber].restaurantInfo;
            // place info in modal that pops up on screen
            // console.log(randomChoice)
            // console.log(this.props.userList)
            this.setState({
                randomNumber: randomNumber,
                randomChoice: randomChoice,
                randomModalShow: true
            })
        } else { this.getRandomSelection() };
    }

    randomModalToggle = () => {

        this.setState({
            randomModalShow: !this.state.randomModalShow
        })
    }

    render(){
        return (
            <div className='myListMain'>
                <div className="myListMainHeader">
                    <button onClick={this.randomizeSelection}>Feeling Lucky??</button> 
                    <Link to="/MainApp" className="mainSearchLink">Search again!</Link>
                 </div>
                
                <ul>
                    {   
                        this.props.userList.map((listItem) => {
                            
                            return (
                                <li key={listItem.restaurantInfo.id} className="myListDetailCard">
                                    <img src={listItem.restaurantInfo.image_url} alt={listItem.restaurantInfo.name}/>
                                    <h2>{listItem.restaurantInfo.name}</h2>
                                    <p>{listItem.restaurantInfo.price}</p>
                                    <button onClick={(event) => this.props.removeFromFirebase(event)} id={listItem.key}>Remove</button>
                                </li>
                            )
                        })
                    }
                </ul>

                {
                this.state.randomModalShow === true ? 
                <RandomSelectionModal
                    randomizeSelection={this.randomizeSelection}
                    getRandomSelection={this.getRandomSelection}
                    randomChoice={this.state.randomChoice}
                    randomModalToggle={this.randomModalToggle} 
                    onRandModalClose = {this.onRandModalClose}
                />
                : null
                }
            </div>  
        )
    }
}


export default MyList;