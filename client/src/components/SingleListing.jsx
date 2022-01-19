import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
      <Card sx={{ width: 200 }}>
        <Paper>
          <CardMedia
            component='img'
            sx={{ width: 200 }}
            image={listImg.imgUrl}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {list.type}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
    </div>
  );

};

export default SingleListing;