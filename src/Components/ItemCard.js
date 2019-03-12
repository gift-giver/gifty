import React from 'react';
import logo from './../assets/Yelp_trademark_RGB_outline.png';
import fiveStar from "./../assets/5.png";
import fourPointFive from "./../assets/4.5.png";
import fourStar from "./../assets/4.png";
import threePointFive from "./../assets/3.5.png";
import threeStar from "./../assets/3.png";
import twoPointFive from "./../assets/2.5.png";
import twoStar from "./../assets/2.png";
import onePointFive from "./../assets/1.5.png";
import oneStar from "./../assets/1.png";
import zeroStar from "./../assets/0.png";

const ItemCard = (props) => {
    // const rating = props.itemInfo.rating
    return (
        <React.Fragment>
            <div className="itemCardImageContainer">
              <img src={props.itemInfo.image_url} alt={props.name} className="itemCardImage" />  
            </div>
            
            <div className="itemInfoContainer">
                <h2>{props.itemInfo.name}</h2>
                <p>{props.itemInfo.price}</p>
                <a href={`tel://` + props.itemInfo.display_phone}>{props.itemInfo.display_phone}</a>
                <a href={`http://maps.google.com/?q=${props.itemInfo.location.display_address}`} target="_blank">{props.itemInfo.location.display_address}</a>

                <div className="logoContainer">
                    <a href={props.itemInfo.url} target="_blank" rel="noopener noreferrer">Read more on Yelp<img src={logo} alt="Yelp Logo" className="logo" /></a>
                </div>

                {
                    props.itemInfo.rating === 5 &&
                    <React.Fragment>
                        <img src={fiveStar} alt="Five Stars" />
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                     
                }
                {
                    props.itemInfo.rating === 4.5 &&
                    <React.Fragment>
                        <img src={fourPointFive} alt="Four Point Five Stars" />
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 4 &&
                    <React.Fragment>
                        <img src={fourStar} alt="Four Stars" />
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 3.5 &&
                    <React.Fragment>
                        <img src={threePointFive} alt="Three Point Five Stars"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 3 &&
                    <React.Fragment>
                        <img src={threeStar} alt="Three Stars"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 2.5 &&
                    <React.Fragment>
                        <img src={twoPointFive} alt="Two Point Five Stars"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 2 &&
                    <React.Fragment>
                        <img src={twoStar} alt="Two Stars"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                    
                }
                {
                    props.itemInfo.rating === 1.5 &&
                    <React.Fragment>
                        <img src={onePointFive} alt="One Point Five Stars"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 1 &&
                    <React.Fragment>
                        <img src={oneStar} alt="One Star"/>
                        <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
                {
                    props.itemInfo.rating === 0 &&
                    <React.Fragment>
                       <img src={zeroStar} alt="Zero Stars"/> 
                       <p>Based on {props.itemInfo.review_count} reviews</p>
                    </React.Fragment>
                    
                }
              <button onClick={() => props.pushToFirebase(props.itemInfo)} key={props.itemInfo.id}>Add To List</button>  
            </div>
            
        </React.Fragment>
    )
}

export default ItemCard;
