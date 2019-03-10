import React from 'react';


const RandomSelectionModal = (props) => {
    console.log(props.randomChoice.name)
    return (
        <React.Fragment>
            <h2>Try This!</h2>
            <p>{props.randomChoice.name}</p>
            <button onClick={props.randomizeSelection}>Try Again!</button>

        </React.Fragment>
    )
}

export default RandomSelectionModal;