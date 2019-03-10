import React from 'react';
import SearchBar from './SearchBar.js';


const Header = (props) => {
    return (
      <React.Fragment>
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