import React from 'react';



const MyList = (props) => {
    
    return (

                <div>
                    <img src={props.myListItems.title.image_url}></img>
                    <h2>{props.myListItems.title.name}</h2>
                    <p>{props.myListItems.title.price}</p>
                    <button onClick={(event) => props.removeFromFirebase(event)} id={props.myListItems.key}>Remove</button>
                </div>  
    )
}




export default MyList;