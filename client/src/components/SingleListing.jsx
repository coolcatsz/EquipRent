import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@material-ui/core/Paper';


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
      <Paper elevation={0}>
        <Card variant="none">
          <Paper>
            <CardMedia
              component="img"
              sx={{ width: 170 }}
              image={listImg.imgUrl}
              alt="Item Img"
            />
            <Typography variant="h6" component="div">
              {list.type}
            </Typography>
          </Paper>
        </Card>
      </Paper>
    </div>
  );

};

export default SingleListing;