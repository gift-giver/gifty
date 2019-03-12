import React from 'react';

const ItemDetails = (props) => {
 return (
            <div className="itemDetailsContainer">
                <div className="backgroundBlur"></div>
                <div className="itemModal">
                    <button className="closeModal"
                        onClick={props.onModalClose}>
                    X</button> 
                    <div className="itemDetailsImageContainer clearfix">
                        <img src={props.itemInfo.image_url} alt={props.itemInfo.name} />
                    </div>

                    <div className='modalInfoContainer'>
                        <h2>{props.itemInfo.name}</h2>
                        <p>{props.itemInfo.rating}</p>
                      
                        <button onClick={() => props.pushToFirebase(props.itemInfo)} key={props.itemInfo.id}>Add To List</button>
                        {/* //TODO: Need to add a if else or something here to change add my list to see my list when clicked */}
                   
                    </div>
                    
                </div>
            </div>
        )
}

export default ItemDetails;