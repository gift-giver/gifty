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
import phone from "./../assets/phoneIcon.png";
import location from "./../assets/locationIcon.png";


const MyListItemCard = (props) => {

  return (
    <React.Fragment>
      <div className="itemCardImageContainer">
        <img src={props.listItem.restaurantInfo.image_url} alt={props.listItem.restaurantInfo.name} className="itemCardImage" />
      </div>

      <div className="itemInfoContainer">
        <h2>{props.listItem.restaurantInfo.name}</h2>
        <p>{props.listItem.restaurantInfo.price}</p>
        <div className="iconContainer">
          <a href={`tel://` + props.listItem.restaurantInfo.display_phone}> <img src={phone} aria-hidden="true" rel="noopener noreferrer" />
          <span className="sr-only"></span></a>
          
          <a href={`http://maps.google.com/?q=${props.listItem.restaurantInfo.location.display_address}`} target="_blank" rel="noopener noreferrer"> <img src={location} aria-hidden="true"/><span className="sr-only"></span></a>
      </div>
          <div className="logoContainer">
            <a href={props.listItem.restaurantInfo.url} target="_blank" rel="noopener noreferrer">Read more on<img src={logo} alt="Yelp Logo" className="logo" /></a>
          </div>
        

        {
          props.listItem.restaurantInfo.rating === 5 &&
          <div className="ratingContainer">
            <img src={fiveStar} alt="Five Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 4.5 &&
          <div className="ratingContainer">
            <img src={fourPointFive} alt="Four Point Five Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 4 &&
          <div className="ratingContainer">
            <img src={fourStar} alt="Four Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 3.5 &&
          <div className="ratingContainer">
            <img src={threePointFive} alt="Three Point Five Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>

        }
        {
          props.listItem.restaurantInfo.rating === 3 &&
          <div className="ratingContainer">
            <img src={threeStar} alt="Three Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>

        }
        {
          props.listItem.restaurantInfo.rating === 2.5 &&
          <div className="ratingContainer">
            <img src={twoPointFive} alt="Two Point Five Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 2 &&
          <div className="ratingContainer">
            <img src={twoStar} alt="Two Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 1.5 &&
          <div className="ratingContainer">
            <img src={onePointFive} alt="One Point Five Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 1 &&
          <div className="ratingContainer">
            <img src={oneStar} alt="One Star" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }
        {
          props.listItem.restaurantInfo.rating === 0 &&
          <div className="ratingContainer">
            <img src={zeroStar} alt="Zero Stars" />
            <p>Based on {props.listItem.restaurantInfo.review_count} reviews</p>
          </div>
        }

        <button onClick={(event) => props.removeFromFirebase(event)} id={props.listItem.key}
        className="tryAgain">Remove</button>

      </div>

    </React.Fragment>
  )
}

export default MyListItemCard;
