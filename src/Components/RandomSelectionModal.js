import React from 'react';


const RandomSelectionModal = (props) => {
 
    console.log(props.randomChoice);
    return (
        <div className="itemDetailsContainer randomSelectionContainer">
            <div className="backgroundBlur"></div>
            <div className="itemModal">
                <button className="closeModal" onClick={props.onRandModalClose}>X</button>
                
                <div className="itemDetailsImageContainer clearfix">
                   <img src={props.randomChoice.image_url} alt={props.randomChoice.name}/> 
                </div>
                <div className="modalInfoContainer">
                   <h2>Try This!</h2>
                   <p>{props.randomChoice.name}</p>
                <button onClick={props.randomizeSelection}>Try Again!</button> 
                </div>
                
            </div>

        </div>
    )
}

export default RandomSelectionModal;