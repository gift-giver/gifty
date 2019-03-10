import React from 'react';

const ItemDetails = (props) => {
 return (
            <React.Fragment>
                <div className="backgroundBlur"></div>
                <div className="itemModal">
                    <button className="closeModal"
                        onClick={props.onModalClose}>
                        X</button> 
                    <img src={props.itemInfo.image_url} alt={props.itemInfo.name}/>

                    <div className='modalInfoContainer'>
                        <h2>{props.itemInfo.name}</h2>
                        <p>{props.itemInfo.rating}</p>
                      
                        <button onClick={() => props.pushToFirebase(props.itemInfo)} key={props.itemInfo.id}>Add To List</button>
                   
                    </div>
                    
                </div>
            </React.Fragment>
        )
}


export default ItemDetails;