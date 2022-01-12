import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
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
        <Typography>
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
              <p>{item.type}</p>
            </span>
          </div>
        </Typography>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>
          <p>Img not found!!</p>
        </Typography>
      </div>
    );
  }
};

export default Image;