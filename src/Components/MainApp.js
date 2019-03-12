import React, {Component } from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer.js';

// import dependencies
import AnimateHeight from 'react-animate-height';
import Loader from 'react-loaders'



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
        
                this.setState({
                    height: height === 1000 ? 120 : 120,
                    filterVisibility: false,
                    makeVisible:true,
                   
                })
          }
    
    showFilterOptions = () => {
        const { height, filterVisibility } = this.state;

        this.setState({
            height: height === 120 ? 150 : 120,
            filterVisibility:!filterVisibility
        })
    }
    
    render() {
        const { height } = this.state;
        return (
            <React.Fragment>

                    <header>
                <AnimateHeight
                        height={height} 
                        // delay={200}    
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
                            makeVisible={this.state.makeVisible}
                        />
 
                </AnimateHeight>
                    </header>

                <main>
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

