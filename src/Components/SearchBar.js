import React from 'react';

const SearchBar = (props) => {

    return (
        <form 
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
        >
            <fieldset>
                <legend>What are you hungry for?</legend>
                <label htmlFor="mainSearchBar">Search for local cuisine</label>
                <input 
                    type="text" 
                    id="mainSearchBar"
                    placeholder="Search Items" 
                    name="mainSearchBar"
                    onFocus={(event) => props.onFocus(event)}
                    onChange={(event) => props.onTextInput(event)}
                    value={props.textInputValue}
                    required
                >
                </input>

                <label htmlFor="priceSearch">Price level</label>
                <select name="price" id="priceSearch">
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>

                <label htmlFor="ratingSearch"></label>
                <select name="rating" id="ratingSearch">
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                    <option value="4">4 star</option>
                    <option value="5">5 star</option>
                </select>

                <label htmlFor="locationSearch">Search by City</label>
                <input 
                    type="text"
                    placeholder="Search City"
                    onFocus={(event) => props.onFocus(event)}
                    onChange={(event) => props.onTextInput(event)}
                    value={props.searchLocationInput}
                    name="searchLocation"
                    id="searchLocation"
                />
                <button type="submit">Search</button>

            </fieldset>
            
        </form>
    )
}

export default SearchBar;