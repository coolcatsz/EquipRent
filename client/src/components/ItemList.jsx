import React from 'react';
import Image from './Image.jsx';



const ItemList = ({itemList, handleClick, user, addBookmark}) => {

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