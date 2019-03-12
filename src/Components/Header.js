import React, {Component } from 'react';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router-dom';
import Filter from "./Filter.js";


const Header = (props) => {

  return (

    <React.Fragment>

      {
        props.userListLength > 0 &&
        <Link to="/mylist" className="myListLinkMain">See My List ({props.userListLength})</Link>
      }

      <div className="searchBarContainer">
        {
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
        }

        {
          props.filterVisibility === true &&
          <Filter
            ratingValue={props.ratingValue}
            showFilterOptions={props.showFilterOptions}
            priceValue={props.priceValue}
            onChangeEvent={props.onChangeEvent}
          />

        }
      </div>


    </React.Fragment>
  );
}
export default Header;