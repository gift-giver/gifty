import React from 'react';

const SearchBar = (props) => {

    return (
        <form 
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
        >
            <fieldset>
                <section className="searchBarLeft">
                <div className="keywordSearch">
                    <legend>Penne for your Thoughts on dinner?</legend>
                    <label htmlFor="mainSearchBar">Search for local cuisine</label>
                    <input 
                        type="text" 
                        id="mainSearchBar"
                        placeholder="Search Items" 
                        name="cuisineTextInput"
                        onFocus={(event) => props.onFocusEvent(event)}
                        onChange={(event) => props.onChangeEvent(event)}
                        value={props.cuisineTextInputValue}
                        required
                    >
                    </input>
                </div>

                <div className="priceFilter">
                    <label htmlFor="priceSearch">Price</label>
                    <select name="price" id="priceSearch" value={props.priceValue} onChange={(event) => props.onChangeEvent(event)}>
                        <option value="0">All</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                    </div>
                </section>
                <section className="searchBarRight">
                <div className="ratingFilter">
                    <label htmlFor="ratingSearch">Rating</label>
                    <select name="rating" id="ratingSearch" value={props.ratingValue} onChange={(event) => props.onChangeEvent(event)}>
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
                </div>

                <div className="locationFilter">
                    <label htmlFor="locationSearch">Search by City</label>
                    <input 
                        type="text"
                        placeholder="Search City"
                        onFocus={(event) => props.onFocusEvent(event)}
                        onChange={(event) => props.onChangeEvent(event)}
                        value={props.locationTextInputValue}
                        name="locationTextInput"
                        id="locationSearch"
                        required
                    />
                    <button type="submit">Search</button>
                    </div>
                </section>

            </fieldset>
            
        </form>
    )
}

export default SearchBar;

