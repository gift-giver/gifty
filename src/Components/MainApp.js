import React from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';
// import dependencies


const MainApp = (props) => {

        return (
            <React.Fragment>
                <header>
                    <Header
                        onSearchSubmit={props.onSearchSubmit}
                        onChangeEvent={props.onChangeEvent}
                        onFocusEvent={props.onFocusEvent}
                        cuisineTextInputValue={props.cuisineTextInputValue}
                        locationTextInputValue={props.locationTextInputValue}
                        priceValue={props.priceValue}
                        ratingValue={props.ratingValue}
                    />
                </header>

                <main>
                    <Main
                        itemInfo={props.itemInfo}
                        ratingValue={props.ratingValue}
                        handleClick={props.handleClick}

                        modalData={props.modalData}
                        modalIsHidden={props.modalIsHidden}
                        onClickToModal={props.onClickToModal}
                        onModalClose={props.onModalClose}
                    />
                </main>

                <Footer />
            </React.Fragment>
        )
    }


export default MainApp;

// POTENTIAL ERROR HANDLING

// const checkUserChoice = []
        // if (checkUserChoice.includes(info) === false) {
        //     checkUserChoice.push(info)
        // } else {
        //     console.log('You already have this')
        // }

        // const userChoice = []
        // if (userChoice.length === 10) {
        //     alert('you cant have more than 10!')
        // } else {
        //     userChoice.push(info);
        // }

        // console.log(userChoice);