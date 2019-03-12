import React from "react";

const Filters = (props) => {
    return (
        <section className="searchBarRight">

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

        </section>
    )
}

export default Filters;