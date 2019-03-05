import React, {Component} from 'react';
import SearchBar from './SearchBar.js';

class Header extends Component {
  render() {
    return (
      <div>
        <SearchBar 
          onSearchSubmit={this.props.onSearchSubmit}
          onTextInput={this.props.onTextInput}
          textInputValue={this.props.textInputValue}
        />
      </div>
    );
  }
}
export default Header;