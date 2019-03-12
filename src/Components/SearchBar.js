import React from 'react';


const SearchBar = (props) => {
    
   
    return (
        <form 
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
        >
            <fieldset>
            <section className="searchBarLeft">
                <legend>What are you hungry for?</legend>
                <div className="keywordSearch">
                    <label htmlFor="mainSearchBar" className="visibilityHidden">Search for local cuisine</label>
                        <input 
                        type="text" 
                        id="mainSearchBar"
                        placeholder="Search Cuisine" 
                        name="cuisineTextInput"
                        onFocus={(event) => props.onFocusEvent(event)}
                        onChange={(event) => props.onChangeEvent(event)}
                        value={props.cuisineTextInputValue}
                        required
                    >
                    </input>
                    </div>
                    
                     <div className="locationFilter">
                    <label htmlFor="locationSearch" className='visibilityHidden'>Search by City</label>
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
                    </div>
            </section>
               
            <div className="buttonContainer">
                <button type="submit"
                    onClick={props.animateHeaderHeight}>Search
                </button>
                <button
                    onClick={props.showFilterOptions}>
                    {
                    
                    props.filterVisibility === true ?
                        'Hide Filters' : 'Show Filters'
                    }
                    </button>
            </div>
                
            </fieldset>
            
        </form>
    )
}

export default SearchBar;

