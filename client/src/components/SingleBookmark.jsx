import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Bookmark from '@mui/icons-material/Bookmark';

const SingleBookmark = ({bookmark}) => {
  const [allBookmark, setAllBookmark] = useState({});
  const [bookmarkImg, setBookmarkImg] = useState({});
  // console.log(bookmark, 'bookmark');
  // console.log(allBookmark, 'allbookmark');

  const bookmarkItem = () => {
    axios.get(`/item/itemById/${bookmark.itemId}`)
      .then(({ data }) => {
        setAllBookmark(data);
      }).catch((err) => console.error('BookErr'));
  };

  const bookmarkItemImg = () => {
    axios.get(`/item/itemImg/${bookmark.itemId}`)
      .then(( {data} ) => {
        setBookmarkImg(data[0]);
      }).catch((err) => console.error('BookMarkImgErr'));
  };

  useEffect(() => {
    bookmarkItem();
    bookmarkItemImg();
  }, []);

  console.log(bookmarkImg, '????');
  let bookImg;
  if (bookmark.itemId === bookmarkImg.itemId) {
    bookImg = bookmarkImg.imgUrl;
  }

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        style ={{ width: '200px', height: '200px'}}
        image={`${bookImg}`}
        alt="Item Img"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {allBookmark.brand}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {allBookmark.type}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <Bookmark sx={{ height: 38, width: 38 }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default SingleBookmark;