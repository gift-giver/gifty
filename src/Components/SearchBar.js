import React from 'react';

const SearchBar = (props) => {

    return (
        <form 
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
        >
            <input 
                type="text" 
                placeholder="Search Items" 
                name="mainSearchBar"
                onFocus={props.onFocus}
                onChange={(event) => props.onTextInput(event)}
                value={props.textInputValue}
                onFocus={props.onFocus}
            >
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;