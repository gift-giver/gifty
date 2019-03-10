import React, {Component} from 'react';
import SearchBar from './SearchBar.js';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <SearchBar 
          onFocus={this.props.onFocus}
          onSearchSubmit={this.props.onSearchSubmit}
          onTextInput={this.props.onTextInput}
          textInputValue={this.props.textInputValue}
          searchLocationInput=
          {this.props.searchLocationInput}
          priceValue={this.props.priceValue}
          ratingValue={this.props.ratingValue}
        />
       
        
      </div>
    );
  }
}
export default Header;