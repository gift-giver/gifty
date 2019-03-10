import React, {Component} from 'react';
import RandomSelectionModal from './RandomSelectionModal.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';

class MyList extends Component {
    constructor(){
        super();
        this.state = {
            randomNumber: null,
            randomChoice: '',
            randomModalShow: false
        }
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

            this.setState({
                randomNumber: randomNumber,
                randomChoice: randomChoice,
                randomModalShow: true
            })
        } else { this.randomizeSelection() };
    }

    randomModalToggle = () => {

        this.setState({
            randomModalShow: !this.state.randomModalShow
        })
    }



    render(){
        return (
            <div className='myListMain'>
                <button onClick={this.randomizeSelection}>Feeling Lucky??</button> 
                <Link to="/MainApp" className="mainSearchLink">Search again!</Link>
                <ul>
                    {
                        this.props.userList.map((listItem) => {
                            console.log(listItem.restaurantInfo.image_url);
                            {/* console.log(this.state.randomChoice) */}
                            return (
                                <li key={listItem.restaurantInfo.id} className="myListDetailCard">
                                    <img src={listItem.restaurantInfo.image_url}/>
                                    <h2>{listItem.restaurantInfo.name}</h2>
                                    <p>{listItem.restaurantInfo.price}</p>
                                    <button onClick={(event) => this.props.removeFromFirebase(event)} id={listItem.key}>Remove</button>
                                </li>
                            )
                        })
                    }
                </ul>

                {
                this.state.randomModalShow === true ? <RandomSelectionModal
                    randomizeSelection={this.randomizeSelection}
                    randomChoice={this.state.randomChoice}
                    randomModalToggle={this.randomModalToggle} />
                : null
                }
            </div>  
        )
    }
}


export default MyList;