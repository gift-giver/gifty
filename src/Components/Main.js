import React from 'react';
import ItemCard from './ItemCard.js';

const Main = (props) => {
    return (
      <div className="mainContainer">
        <section>
          <ul className="galleryGrid clearfix">
            {
              props.itemInfo.map((info) => {
                return (
                  <li
                    key={info.id}  
                  >
                    <ItemCard
                      itemInfo={info}
                      pushToFirebase={props.pushToFirebase}
                    />
                  </li>
                )
              })
            }
            </ul>
          </section>
      </div>
    );
}
export default Main;