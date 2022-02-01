import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Bookmark from '@mui/icons-material/Bookmark';
import Paper from '@material-ui/core/Paper';

const SingleBookmark = ({bookmark}) => {

  const [allBookmark, setAllBookmark] = useState({});
  const [bookmarkImg, setBookmarkImg] = useState({});

  const bookmarkItem = () => {
    axios.get(`/item/itemById/${bookmark.itemId}`)
      .then(({ data }) => setAllBookmark(data))
      .catch((err) => console.error('BookErr'));
  };

  const bookmarkItemImg = () => {
    axios.get(`/item/itemImg/${bookmark.itemId}`)
      .then(( {data} ) => setBookmarkImg(data[0]))
      .catch((err) => console.error('BookMarkImgErr'));
  };

  useEffect(() => {
    bookmarkItem();
    bookmarkItemImg();
  }, []);

  let bookImg;
  if (bookmark.itemId === bookmarkImg.itemId) {
    bookImg = bookmarkImg.imgUrl;
  }

  return (
    <Paper elevation={0} variant="none">
      <Card sx={{ display: 'inline-flex', marginLeft: '25px', marginTop: '30px' }} variant="none">
        <img
          src={`${bookImg}`}
          style ={{width: 200, height: 200, border: '1px solid grey', borderRadius: '20px', boxShadow: '5px 9px 16px -11px rgba(0,0,0,0.97)'}}
        >
        </img>
        <Paper>
          <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                {allBookmark.brand}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {allBookmark.type}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton>
                <Bookmark sx={{ height: 25, width: 25 }} />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Card>
    </Paper>
  );
};

export default SingleBookmark;