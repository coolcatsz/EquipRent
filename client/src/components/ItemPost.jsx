import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import SinglePost from './SinglePost.jsx';

const ItemPost = ({ itemReview }) => {

  let ratingAvg = 0;
  const average = itemReview.reduce((total, rateObj) => {
    if (typeof rateObj.rating === 'number') {
      total += rateObj.rating;
      ratingAvg++;
    }
    return total;
  }, 0) / ratingAvg;

  if (itemReview.length !== 0) {
    return (
      <div>
        <div>
          <div style={{marginLeft: '45px', display: 'inline-flex'}}>
            <h1> { average.toFixed(1) } <Rating name="read-only" value={ average.toFixed(1) } precision={0.5} size="large" readOnly /></h1>
            <Typography variant='h6' style={{marginLeft: '20px', marginTop: '25px'}}> Based on {itemReview.length} reviews</Typography>
          </div>
          <Divider variant="middle"/>
          <Paper elevation={0}>
            <Grid >
              {
                itemReview.sort((a, b) => {
                  if (a.createdAt > b.createdAt) {
                    return 1;
                  }
                  if (a.createdAt < b.createdAt) {
                    return -1;
                  }
                  if (a.createdAt === b.createAt) {
                    return 0;
                  }
                }).reverse().map((post) => {
                  console.log(post);
                  return (
                    <div>
                      <SinglePost post={post} />
                    </div>
                  );
                })
              }
            </Grid>
          </Paper>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Typography variant='h5' style={{marginLeft: '50px'}}>No Reviews Yet</Typography>
      </div>
    );
  }
};

export default ItemPost;