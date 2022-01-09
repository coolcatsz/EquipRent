import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';


const ItemPost = ({ itemReview, user }) => {
  console.log(user, 'REVIEWITEM');

  if (itemReview.length !== 0) {
    return (
      <div>
        <h1>Reviews</h1>
        <div>
          <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {
              itemReview.map((post) => {
                return (
                  <Grid item xs={6} key={post.id}>
                    <div key={post.id}>
                      <div>
                        <ul>
                          <li>Rating: {post.rating}</li>
                          <li>Description: {post.description}</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                );
              })
            }
          </Grid>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No Reviews Yet</h1>
      </div>
    );
  }
};

export default ItemPost;