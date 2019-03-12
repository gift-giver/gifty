import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main.js";
import Footer from "./Footer.js";

// import dependencies
import AnimateHeight from "react-animate-height";

class MainApp extends Component {
    constructor() {
        super();
        this.state = {
            height: 1000,
            filterVisibility: true,
        }
    }

    animateHeaderHeight = () => {
        const { height } = this.state;
        if (/^\s+$/i.test(this.props.cuisineTextInputValue) === false && this.props.cuisineTextInputValue !== '') {

            this.setState({
                height: height === 1000 ? 150 : 150,
                filterVisibility: false,
            })
        }
    }

    showFilterOptions = () => {
        const { height, filterVisibility } = this.state;

        this.setState({
            height: height === 150 ? 250 : 150,
            filterVisibility: !filterVisibility
        })
    }

    render() {
        const { height } = this.state;
        return (
            <React.Fragment>

                <header className="mainAppHeader">
                    <AnimateHeight
                        height={height}
                    >
                        <Header
                            userListLength={this.props.userListLength}
                            onSearchSubmit={this.props.onSearchSubmit}
                            onChangeEvent={this.props.onChangeEvent}
                            onFocusEvent={this.props.onFocusEvent}
                            cuisineTextInputValue={this.props.cuisineTextInputValue}
                            locationTextInputValue={this.props.locationTextInputValue}
                            priceValue={this.props.priceValue}
                            ratingValue={this.props.ratingValue}
                            headerHeight={this.state.height}
                            animateHeaderHeight={this.animateHeaderHeight}
                            showFilterOptions={this.showFilterOptions}
                            filterVisibility={this.state.filterVisibility}
                            userList={this.props.userList}
                        />

                    </AnimateHeight>
                </header>

                <main className="mainAppMain">
                    <Main
                        itemInfo={this.props.itemInfo}
                        ratingValue={this.props.ratingValue}
                        pushToFirebase={this.props.pushToFirebase}
                        modalContentData={this.props.modalContentData}
                        modalContentIsHidden={this.props.modalContentIsHidden}
                    />
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default MainApp;