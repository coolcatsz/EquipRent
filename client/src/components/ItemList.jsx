import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';
// import SingleItem from './SingleItem.jsx';

const ItemList = ({itemList}) => {
  // console.log(itemList, 'ITEM');
  return (
    <div>
      <h1>Item</h1>
      <div style={{display: 'inline-block'}}>
        {
          itemList.map((item) => {
            // console.log(item, 'Single');
            return (
              <div
                key={item.id}
                style={{display: 'inline-block', padding: '10px'}}
              >
                <Image key={item.id} item={item}/>
                <span><p>Item: {item.brand}</p></span>
                <span><p>Type: {item.type}</p></span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ItemList;