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
      <Grid container spacing={2}>
        <Typography>
          <img src={listImg.imgUrl} style ={{width: 170, height: 200}}></img>
          <p>{list.type}</p>
        </Typography>
      </Grid>
    </div>
  );

};

export default SingleListing;