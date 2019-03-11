import React from 'react';
import SearchBar from './SearchBar.js';
import {Link } from 'react-router-dom';


const Header = (props) => {
    return (
      <React.Fragment>
        <Link to="/MyList" className="myListLinkMain">See My List</Link>
        <SearchBar 
          onFocusEvent={props.onFocusEvent}
          onSearchSubmit={props.onSearchSubmit}
          onChangeEvent={props.onChangeEvent}
          cuisineTextInputValue={props.cuisineTextInputValue}
          locationTextInputValue={props.locationTextInputValue}
          priceValue={props.priceValue}
          ratingValue={props.ratingValue}
        />
       
        
      </React.Fragment>
    );
}

export default Header;