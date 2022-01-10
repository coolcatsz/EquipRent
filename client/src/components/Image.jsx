import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Image = ({item, handleClick}) => {
  const [itemImg, setItemImg] = useState({});

  const getItemImg = () => {
    axios.get(`/item/itemImg/${item.id}`)
      .then(( {data} ) => setItemImg(data[0]))
      .catch((err) => console.error('GetAxiosErr'));
  };

  useEffect(() => {
    getItemImg();
  }, []);

  if (itemImg !== undefined && item.id === itemImg.itemId) {
    return (
      <div>
        <div>
          <Link to={`/item/${item.id}`}>
            <img
              src={`${itemImg.imgUrl}`}
              style ={{width: '300px', height: '300px', border: '5px solid black'}}
              onClick={() => handleClick(item)}
            >
            </img>
          </Link>
        </div>
        <div>
          <span
            style={{display: 'inline-flex'}}
          >
            <p>Item: {item.brand}</p>
          </span>
        </div>
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