import React, {Component} from 'react';
import RandomSelectionModal from './RandomSelectionModal.js';
import Footer from './Footer.js';
import { Link } from 'react-router-dom';
import logo from './../assets/Yelp_trademark_RGB_outline.png';
import fiveStar from "./../assets/5.png";
import fourPointFive from "./../assets/4.5.png";
import fourStar from "./../assets/4.png";
import threePointFive from "./../assets/3.5.png";
import threeStar from "./../assets/3.png";
import twoPointFive from "./../assets/2.5.png";
import twoStar from "./../assets/2.png";
import onePointFive from "./../assets/1.5.png";
import oneStar from "./../assets/1.png";
import zeroStar from "./../assets/0.png";

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
            const randomChoice = this.props.userList[randomNumber]
            // place info in modal that pops up on screen
            console.log(this.props.userList);
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
            <React.Fragment>
                <div className="myListHeader">
                    <h2>List Name Goes Here!</h2>
                    <Link to="/MainApp" className="mainSearchLink">Search again!</Link>
                </div>
                <div className='myListMain'>
                    <button onClick={this.randomizeSelection}>Feeling Lucky??</button> 
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
                                        <div className="logoContainer">
                                            <a href={listItem.restaurantInfo.url} target="_blank"> <img src={logo} alt="Yelp Logo" className="logo" /></a>
                                         </div>
                                    {
                                        listItem.restaurantInfo.rating === 5 &&
                                        <img src={fiveStar} alt="Five Stars" /> 
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 4.5 &&
                                        <img src={fourPointFive} alt="Four Point Five Stars" />
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 4 &&
                                        <img src={fourStar} alt="Four Stars" />
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 3.5 &&
                                        <img src={threePointFive} alt="Three Point Five Stars"/>
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 3 &&
                                        <img src={threeStar} alt="Three Stars"/>
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 2.5 &&
                                        <img src={twoPointFive} alt="Two Point Five Stars"/>
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 2 &&
                                        <img src={twoStar} alt="Two Stars"/>
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 1.5 && 
                                        <img src={onePointFive} alt="One Point Five Stars"/>
                                    }
                                    {
                                         listItem.restaurantInfo.rating === 1 &&
                                        <img src={oneStar} alt="One Star"/>
                                    }
                                    {
                                     listItem.restaurantInfo.rating === 0 &&
                                    <img src={zeroStar} alt="Zero Stars"/>
                                    }
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
            </React.Fragment>
        )
    }
}


export default MyList;