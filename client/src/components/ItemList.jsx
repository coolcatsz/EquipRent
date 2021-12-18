import React from 'react';
import Item from './Item.jsx';

const ItemList = ({itemList}) => {

  return (
    <div>
      <h1 style={{fontStyle: 'italic'}}>Item</h1>
      <div style={{display: 'inline-block'}}>
        {
          itemList.map((item) => {
            console.log(item, 'Single');
            return (
              <div
                key={item.id}
                style={{display: 'inline-block', padding: '10px'}}
              >
                <Item key={item.id} item={item}/>
                <span><h4>Item Type: {item.type}</h4></span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ItemList;