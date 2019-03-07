import React from 'react';


const ItemCard = (props) => {
    return (
        <div>
             <img src={props.itemInfo.image}></img>
             <h2>{props.itemInfo.name}</h2>
             <p>{props.itemInfo.price}</p>

        </div>
    )
        
    
}

export default ItemCard;
