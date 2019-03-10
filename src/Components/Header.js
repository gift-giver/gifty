import React from 'react';
import SearchBar from './SearchBar.js';
import {Link } from 'react-router-dom';


const Header = (props) => {
    return (
      <React.Fragment>
        <Link to="/MyList" className="myListLinkmain">See My List</Link>
        <SearchBar 
          onFocus={props.onFocus}
          onSearchSubmit={props.onSearchSubmit}
          onTextInput={props.onTextInput}
          textInputValue={props.textInputValue}
          searchLocationInput=
          {props.searchLocationInput}
          priceValue={props.priceValue}
          ratingValue={props.ratingValue}
        />
       
        
      </React.Fragment>
    );
}

export default Header;