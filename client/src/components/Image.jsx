import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Image = ({item, handleClick}) => {
  // console.log(item.id, 'ITEM');
  const [itemImg, setItemImg] = useState({});

  const getItemImg = () => {
    axios.get(`/item/itemImg/${item.id}`)
      .then(( {data} ) => {
        // console.log(data[0], 'DATA');
        setItemImg(data[0]);
      }).catch((err) => console.error('GetAxiosErr'));
  };

  useEffect(() => {
    getItemImg();
  }, []);

  if (itemImg !== undefined && item.id === itemImg.itemId) {
    return (
      <div>
        <Link to='/item'>
          <img
            src={`${itemImg.imgUrl}`}
            style ={{width: '250px', height: '250px', border: '5px solid black'}}
            onClick={() => handleClick(item)}
          >
          </img>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>Img not found!!</p>
      </div>
    );
  }
};

export default Image;