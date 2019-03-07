import React, { Component } from 'react';
import ItemCard from './ItemCard.js';

class Main extends Component {
  render() {
    return (
      <ul>
        {
          this.props.itemInfo.map((info) => {
            return (
              <li key={info.id}>
                <ItemCard
                  
                  itemInfo={info}
                  />
              </li>
              
            )
          })

        }
        </ul>
    );
  }
}
export default Main;