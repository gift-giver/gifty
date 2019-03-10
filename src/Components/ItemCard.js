import React from 'react';

const ItemCard = (props) => {
    return (
        <React.Fragment>
             <img src={props.itemInfo.image_url}/>
             <h2>{props.itemInfo.name}</h2>
             <p>{props.itemInfo.price}</p>
        </React.Fragment>
    )
}

export default ItemCard;
