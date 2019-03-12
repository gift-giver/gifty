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
                    <a href={`tel://` + props.randomChoice.display_phone}>Make a reservation: {props.randomChoice.display_phone}</a>
                    <a href={`http://maps.google.com/?q=${props.randomChoice.location.display_address}`} target="_blank">{props.randomChoice.location.display_address}</a>
                    {
                        props.randomChoice.rating === 5 &&
                        <React.Fragment>
                            <img src={fiveStar} alt="Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 4.5 &&
                        <React.Fragment>
                            <img src={fourPointFive} alt="Four Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 4 &&
                        <React.Fragment>
                            <img src={fourStar} alt="Four Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 3.5 &&
                        <React.Fragment>
                            <img src={threePointFive} alt="Three Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 3 &&
                        <React.Fragment>
                            <img src={threeStar} alt="Three Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 2.5 &&
                        <React.Fragment>
                            <img src={twoPointFive} alt="Two Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 2 &&
                        <React.Fragment>
                            <img src={twoStar} alt="Two Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 1.5 &&
                        <React.Fragment>
                            <img src={onePointFive} alt="One Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 1 &&
                        <React.Fragment>
                            <img src={oneStar} alt="One Star" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                    {
                        props.randomChoice.rating === 0 &&
                        <React.Fragment>
                            <img src={zeroStar} alt="Zero Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </React.Fragment>

                    }
                <button onClick={props.getRandomSelection}>Try Again!</button> 
                </div>
                
            </div>

        </div>
    )
}

export default RandomSelectionModal;