import React, {Component } from 'react';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import Filter from "./Filter.js";
import posed from 'react-pose'


class Header extends Component {
  constructor() {
    super();
  
  }
  
  render() {
    // const PosedDiv = posed.div({
    //   top: {
    //     y: '300px',
    //   },
    //   bottom: {
    //     y: '20px'
    //   }
    // })
  
  

    return (
      <React.Fragment>
        {
          this.props.userListLength > 0 &&
          <Link to="/MyList" className="myListLinkMain">See My List({this.props.userListLength})</Link>
        }

        <div className="searchBarContainer" pose={this.props.makeVisible ? 'bottom' : 'top'}>
          <SearchBar
            onFocusEvent={this.props.onFocusEvent}
            onSearchSubmit={this.props.onSearchSubmit}
            onChangeEvent={this.props.onChangeEvent}
            cuisineTextInputValue={this.props.cuisineTextInputValue}
            locationTextInputValue={this.props.locationTextInputValue}
            animateHeaderHeight={this.props.animateHeaderHeight}
            headerHeight={this.props.headerHeight}
            filterVisibility={this.props.filterVisibility}
            showFilterOptions={this.props.showFilterOptions}
          />

          {
            this.props.filterVisibility === true &&
            <Filter
              ratingValue={this.props.ratingValue}
              showFilterOptions={this.props.showFilterOptions}
              priceValue={this.props.priceValue}

            />
    
          }
        </div>
       
               
        
      </React.Fragment>
    );
  }
}
export default Header;