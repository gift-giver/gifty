import React, { Component } from 'react';
import RandomSelectionModal from './RandomSelectionModal.js';
import MyListHeader from './MyListHeader.js';
import MyListItemCard from './MyListItemCard.js';
import Footer from './Footer.js';
import Swal from 'sweetalert2';

class MyList extends Component {
    constructor() {
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

    render() {
        return (
            <React.Fragment>
                <header className="myListHeader">
                    <MyListHeader
                        userName={this.props.userName}
                        removeFullListFromFirebase={this.props.removeFullListFromFirebase}
                        randomizeSelection={this.randomizeSelection}
                    />
                </header>
                <main className="myListMain">
                    <ul className="galleryGrid clearfix">
                        {
                            this.props.userList.map((listItem) => {
                                return (
                                    <li
                                        key={listItem.restaurantInfo.id}
                                    >
                                        <MyListItemCard
                                            listItem={listItem}
                                            removeFromFirebase={this.props.removeFromFirebase}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </main>
                <Footer />

                {
                    this.state.randomModalShow === true ?
                        <RandomSelectionModal
                            randomizeSelection={this.randomizeSelection}
                            getRandomSelection={this.getRandomSelection}
                            randomChoice={this.state.randomChoice}
                            onRandModalClose={this.onRandModalClose}
                            randomModalToggle={this.randomModalToggle}
                        />
                        : null
                }

            </React.Fragment>
        )
    }
}

export default MyList;