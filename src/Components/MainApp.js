import React, { Component} from 'react';
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
                        onTextInput={props.onTextInput}
                        onFocus={props.onFocus}
                        textInputValue={props.textInputValue}
                        searchLocationInput={props.searchLocationInput}

                        priceValue={props.priceValue}
                        ratingValue={props.ratingValue}
                        />
                </header>
                <main>
                <Main
                    itemInfo={props.itemInfo}
                    ratingValue={props.ratingValue}
                    pushToFirebase={props.pushToFirebase}
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