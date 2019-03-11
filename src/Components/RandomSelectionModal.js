import React from 'react';


const RandomSelectionModal = (props) => {
 
    console.log(props.randomChoice);
    return (

        <React.Fragment>
            <div className="backgroundBlur"></div>
            <div className="itemModal">
                <h2>Try This!</h2>
                <img src={props.randomChoice.image_url} alt=""/>
                <p>{props.randomChoice.name}</p>
                <button onClick={props.randomizeSelection}>Try Again!</button>
            </div>

        </React.Fragment>
    )
}

export default RandomSelectionModal;