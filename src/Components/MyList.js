import React, {Component} from 'react';
import RandomSelectionModal from './RandomSelectionModal.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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

        this.props.userList.length > 1 ? this.getRandomSelection() : 
            Swal.fire("Sorry, pal! There must be more than one item in your list to receive a suggestion.")
    }

    // called if userList has a length greater than 1 or triggered by the try again button, returns a random selection from userList
    getRandomSelection = () => {

        const randomNumber = this.getRandomNumber()

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
            <React.Fragment>
                <div className="myListHeader">
                    <h2>Spec-taco-lar Eats with {this.props.userName}</h2>
                    <Link to="/MainApp" className="mainSearchLink">Not feeling anything here? Search again</Link>
                    <button onClick={this.props.removeFullListFromFirebase}>Having second thoughts? Clear this list and start fresh!</button>
                </div>
                <div className='myListMain'>
                    <button onClick={this.randomizeSelection}>Lettuce recommend a restaurant for you</button> 
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
                                        <a href={`tel://` + listItem.restaurantInfo.display_phone}>Make a reservation: {listItem.restaurantInfo.display_phone}</a>
                                        <a href={`http://maps.google.com/?q=${listItem.restaurantInfo.location.display_address}`} target="_blank">{listItem.restaurantInfo.location.display_address}</a>
                                        
                                        <div className="logoContainer">
                                            <a href={listItem.restaurantInfo.url} target="_blank"><img src={logo} alt="Yelp Logo" className="logo" />Read more on Yelp</a>
                                        </div>
                                    
                                        {
                                            listItem.restaurantInfo.rating === 5 &&
                                            <React.Fragment>
                                                <img src={fiveStar} alt="Five Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 4.5 &&
                                            <React.Fragment>
                                                <img src={fourPointFive} alt="Four Point Five Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 4 &&
                                            <React.Fragment>
                                                <img src={fourStar} alt="Four Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 3.5 &&
                                            <React.Fragment>
                                                <img src={threePointFive} alt="Three Point Five Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 3 &&
                                            <React.Fragment>
                                                <img src={threeStar} alt="Three Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 2.5 &&
                                            <React.Fragment>
                                                <img src={twoPointFive} alt="Two Point Five Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 2 &&
                                            <React.Fragment>
                                                <img src={twoStar} alt="Two Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 1.5 &&
                                            <React.Fragment>
                                                <img src={onePointFive} alt="One Point Five Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 1 &&
                                            <React.Fragment>
                                                <img src={oneStar} alt="One Star" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

                                        }
                                        {
                                            listItem.restaurantInfo.rating === 0 &&
                                            <React.Fragment>
                                                <img src={zeroStar} alt="Zero Stars" />
                                                <p>Based on {listItem.restaurantInfo.review_count} reviews</p>
                                            </React.Fragment>

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
                            getRandomSelection={this.getRandomSelection}
                            randomChoice={this.state.randomChoice}
                            onRandModalClose={this.onRandModalClose}
                        randomModalToggle={this.randomModalToggle} />
                    : null
                    }
                    </div>  
            </React.Fragment>
        )
    }
}


export default MyList;