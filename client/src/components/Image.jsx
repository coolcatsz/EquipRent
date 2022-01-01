import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Bookmark from './Bookmark.jsx';

const Image = ({item, handleClick, user}) => {
  console.log(item, 'ITEM', user);
  const [itemImg, setItemImg] = useState({});

  const getItemImg = () => {
    axios.get(`/item/itemImg/${item.id}`)
      .then(( {data} ) => {
        // console.log(data[0], 'DATA');
        setItemImg(data[0]);
      }).catch((err) => console.error('GetAxiosErr'));
  };

  const addBookmark = () => {
    axios.post('/item/bookmark', {
      userId: user.id,
      itemId: item.id
    }).then(() => console.log('BookMarkSuccess'))
      .catch((err) => console.error('BookMarkErr'));
  };

  useEffect(() => {
    getItemImg();
  }, []);

  if (itemImg !== undefined && item.id === itemImg.itemId) {
    return (
      <div>
        <div>
          <Link to='/item'>
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
          <Button
            onClick={addBookmark}
            element={<Bookmark user={user} item={item} itemImg={itemImg} />}
          >
            Bookmark
          </Button>
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