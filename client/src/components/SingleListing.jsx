import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const SingleListing = ({ list, listingClick }) => {
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
      <Grid container spacing={1} style={{marginLeft: '5px', marginTop: '10px'}}>
        <div>
          <Link to={`/item/${list.id}`}>
            <img
              src={listImg.imgUrl}
              style ={{width: 135, height: 150, border: '1px solid grey', borderRadius: '20px', boxShadow: '5px 9px 16px -11px rgba(0,0,0,0.97)'}}
              onClick={() => listingClick(list)}
            >
            </img>
          </Link>
          <Typography>{list.type}</Typography>
        </div>
      </Grid>
    </div>
  );

};

export default SingleListing;