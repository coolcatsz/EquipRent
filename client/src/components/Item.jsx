import React from 'react';

const Item = ({item}) => {
  console.log(item, 'ITEM');
  return (
    <div>
      <img src="https://www.nicepng.com/png/detail/145-1452311_construction-tools-png-hardware-store.png" style ={{width: '250px', height: '250px'
      }}></img>
    </div>
  );
};

export default Item;