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
import location from "./../assets/locationIcon.png"

const RandomSelectionModal = (props) => {

    return (
        <div className="itemDetailsContainer randomSelectionContainer">
            <div className="backgroundBlur"></div>
            <div className="itemModal">

                <button className="closeModal" onClick={props.onRandModalClose}>X</button>

                <div className="itemDetailsImageContainer clearfix">
                    <img src={props.randomChoice.image_url} alt={props.randomChoice.name}/>
                </div>

                <div className="modalInfoContainer">

                   <h2>You Butter Try This!</h2>
                    <p>{props.randomChoice.name}</p>
                    <div className="locationModalIcon">
                        <a href={`tel://` + props.randomChoice.display_phone}><img src={phone} aria-hidden='true' rel="noopener noreferrer" /><span className="sr-only">Call Us Now!</span></a>
                        <a href={`http://maps.google.com/?q=${props.randomChoice.location.display_address}`} target="_blank" rel="noopener noreferrer" ><img src={location} aria-hidden="true" /><span className='sr-only'>Find Us Now</span></a>

                    </div>

                    {
                        props.randomChoice.rating === 5 &&
                        <div>
                            <img src={fiveStar} alt="Five Stars" />
                            <p> Based on {props.randomChoice.review_count} reviews</p>
                
                        </div>


                    }
                    {
                        props.randomChoice.rating === 4.5 &&
                        <div>
                            <img src={fourPointFive} alt="Four Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 4 &&
                        <div>
                            <img src={fourStar} alt="Four Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 3.5 &&
                        <div>
                            <img src={threePointFive} alt="Three Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 3 &&
                        <div>
                            <img src={threeStar} alt="Three Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 2.5 &&
                        <div>
                            <img src={twoPointFive} alt="Two Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 2 &&
                        <div>
                            <img src={twoStar} alt="Two Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 1.5 &&
                        <div>
                            <img src={onePointFive} alt="One Point Five Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 1 &&
                        <div>
                            <img src={oneStar} alt="One Star" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }
                    {
                        props.randomChoice.rating === 0 &&
                        <div>
                            <img src={zeroStar} alt="Zero Stars" />
                            <p>Based on {props.randomChoice.review_count} reviews</p>
                        </div>

                    }

                    <button
                        className="tryAgain"
                        onClick={props.getRandomSelection}>Try Again!
                    </button> 

                </div>
            </div>
        </div>
    )
}

export default RandomSelectionModal;