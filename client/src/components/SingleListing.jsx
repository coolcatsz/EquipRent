import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@mui/material/Grid';

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
      <Grid container spacing={1} style={{marginLeft: '10px', marginTop: '10px'}}>
        <Typography>
          <img
            src={listImg.imgUrl}
            style ={{width: 135, height: 200, border: '1px solid grey', borderRadius: '20px', boxShadow: '5px 9px 16px -11px rgba(0,0,0,0.97)'}}
          >
          </img>
          <p>{list.type}</p>
        </Typography>
      </Grid>
    </div>
  );

};

export default SingleListing;