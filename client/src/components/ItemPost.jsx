import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';

const ItemPost = ({ itemReview, user }) => {
  if (itemReview.length !== 0) {
    return (
      <div>
        <Typography>
          <div>
            <h2 style={{marginLeft: '20px'}}>Reviews</h2>
            <Paper elevation={0}>
              <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
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
                    return (
                      <Grid item xs={6} key={post.id}>
                        <Box
                          sx={{
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr' },
                          }}
                        ></Box>
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
            </Paper>
          </div>
        </Typography>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>
          <h2 style={{marginLeft: '20px'}}>No Reviews Yet</h2>
        </Typography>
      </div>
    );
  }
};

export default ItemPost;