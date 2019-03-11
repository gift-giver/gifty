import React from 'react';

const SearchBar = (props) => {

    return (
        <form 
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
        >
            <fieldset>
                <legend>What are you hungry for?</legend>
                <label htmlFor="cuisineTextInput">Search for local cuisine</label>
                <input 
                    type="text" 
                    id="cuisineTextInput"
                    placeholder="Search Items" 
                    name="cuisineTextInput"
                    onFocus={(event) => props.onFocusEvent(event)}
                    onChange={(event) => props.onChangeEvent(event)}
                    value={props.cuisineTextInputValue}
                    required
                >
                </input>

                <label htmlFor="priceFilter">Price level</label>
                <select name="price" id="priceFilter" value={props.priceValue} onChange={(event) => props.onChangeEvent(event)}>
                    <option value="0">--</option>
                    <option value="1">$</option>
                    <option value="2">$$</option>
                    <option value="3">$$$</option>
                    <option value="4">$$$$</option>
                </select>

                <label htmlFor="ratingFilter"></label>
                <select name="rating" id="ratingFilter" value={props.ratingValue} onChange={(event) => props.onChangeEvent(event)}>
                    <option value="0">0 star</option>                   
                    <option value="1">1 star</option>
                    <option value="1.5">1.5 star</option>
                    <option value="2">2 star</option>
                    <option value="2.5">2.5 star</option>
                    <option value="3">3 star</option>
                    <option value="3.5">3.5 star</option>
                    <option value="4">4 star</option>
                    <option value="4.5">4.5 star</option>
                    <option value="5">5 star</option>
                </select>

                <label htmlFor="locationSearch">Search by City</label>
                <input 
                    type="text"
                    placeholder="Search City"
                    onFocus={(event) => props.onFocusEvent(event)}
                    onChange={(event) => props.onChangeEvent(event)}
                    value={props.locationTextInputValue}
                    name="locationTextInput"
                    id="locationTextInput"
                    required
                />
                <button type="submit">Search</button>

            </fieldset>
            
        </form>
    )
}

export default SearchBar;