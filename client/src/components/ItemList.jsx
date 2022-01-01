import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';
import Button from '@mui/material/Button';


const ItemList = ({itemList, handleClick, user, addBookmark}) => {
  // console.log(itemList, 'ITEM');
  return (
    <div>
      <h1>Item</h1>
      <div style={{display: 'inline-block'}}>
        {
          (itemList.length > 0) ? (
            itemList.map((item) => {
              // console.log(item, 'Single');
              return (
                <div
                  key={item.id}
                  style={{display: 'inline-block', padding: '10px'}}
                >
                  <Image key={item.id} item={item} handleClick={handleClick} user={user} addBookmark={addBookmark}/>
                  {/* <span
                    style={{display: 'inline-flex'}}
                  >
                    <p>Item: {item.brand}</p>
                  </span> */}
                  {/* <span><p>Type: {item.type}</p></span> */}
                </div>
              );
            })
          )
            : (<p>No items match your search terms :(</p>)
        }
      </div>
    </div>
  );
};

export default ItemList;