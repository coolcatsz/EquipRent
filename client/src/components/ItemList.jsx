import React from 'react';
import Image from './Image.jsx';

const ItemList = ({itemList, handleClick, user, addBookmark}) => {

  return (
    <div>
      <div style={{display: 'inherit'}}>
        {
          (itemList.length > 0) ? (
            itemList.sort((a, b) => {
              return a.id - b.id;
            }).reverse().map((item) => {
              return (
                <div
                  key={item.id}
                  style={{display: 'inline-block', padding: '10px', marginLeft: '25px', marginTop: '5px'}}
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