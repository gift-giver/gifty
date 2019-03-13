import React from 'react';
import { Link } from 'react-router-dom';

const MyListHeader = (props) => {
  return (
    <div className="myListHeader">
      <h2>Ideas for Spec-taco-lar Eats with {props.userName}</h2>

      <Link to="/search" className="mainSearchLink">Search again</Link>

      <button onClick={props.randomizeSelection} className="randomizeButton">Lettuce recommend a restaurant for you!</button>

      <button onClick={props.removeFullListFromFirebase} className="redirectButton">Donut love this? Clear this list and start fresh!</button>
    </div>
  )
}

export default MyListHeader;