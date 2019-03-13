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
            onFocusEvent={props.onFocusEvent}
            onSearchSubmit={props.onSearchSubmit}
            onChangeEvent={props.onChangeEvent}
            cuisineTextInputValue={props.cuisineTextInputValue}
            locationTextInputValue={props.locationTextInputValue}
            animateHeaderHeight={props.animateHeaderHeight}
            headerHeight={props.headerHeight}
            filterVisibility={props.filterVisibility}
            showFilterOptions={props.showFilterOptions}
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