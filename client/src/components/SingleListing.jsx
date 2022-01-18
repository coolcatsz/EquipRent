import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const SingleListing = ({ list, userListing }) => {

  const [listImg, setListImg] = useState({});

  const listingImg = () => {
    axios.get(`/item/itemImg/${list.id}`)
      .then(({data}) => setListImg(data[0]))
      .catch((err) => console.error('ListImgErr'));
  };

  useEffect(() => {
    listingImg();
  }, []);

  return (
    <div>
      <div>
        <Typography>
          <img src={listImg.imgUrl} style ={{width: '200px', height: '200px', border: '2px solid black'}}></img>
          <h5>
            {list.type}
          </h5>
        </Typography>
      </div>
    </div>
  );

};

export default SingleListing;