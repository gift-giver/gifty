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
    return (
        <React.Fragment>
            <img src={props.itemInfo.image_url} alt={this.props.name} className="itemCardImage" />
            <div className="itemInfoContainer">
             <h2>{props.itemInfo.name}</h2>
             <p>{props.itemInfo.price}</p>
             <div className="logoContainer">
                    <a href={props.itemInfo.url} target="_blank" rel="noopener noreferrer"> <img src={logo} alt="Yelp Logo" className="logo" /></a>
            </div>
            {
                props.itemInfo.rating === 5 &&
                <img src={fiveStar} alt="Five Stars" /> 
            }
            {
                props.itemInfo.rating === 4.5 &&
                <img src={fourPointFive} alt="Four Point Five Stars" />
            }
            {
                props.itemInfo.rating === 4 &&
                <img src={fourStar} alt="Four Stars" />
            }
            {
                props.itemInfo.rating === 3.5 &&
                <img src={threePointFive} alt="Three Point Five Stars"/>
            }
            {
                props.itemInfo.rating === 3 &&
                <img src={threeStar} alt="Three Stars"/>
            }
            {
                props.itemInfo.rating === 2.5 &&
                <img src={twoPointFive} alt="Two Point Five Stars"/>
            }
            {
                props.itemInfo.rating === 2 &&
                <img src={twoStar} alt="Two Stars"/>
            }
            {
                props.itemInfo.rating === 1.5 &&
                <img src={onePointFive} alt="One Point Five Stars"/>
            }
            {
                props.itemInfo.rating === 1 &&
                <img src={oneStar} alt="One Star"/>
            }
            {
                props.itemInfo.rating === 0 &&
                <img src={zeroStar} alt="Zero Stars"/>
                }
                </div>
        </React.Fragment>
    )
}

export default ItemCard;
