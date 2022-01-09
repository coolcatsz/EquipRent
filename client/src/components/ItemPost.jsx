import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const ItemPost = ({ itemReview, currentItem }) => {
  // console.log(currentItem, 'REVIEWITEM');

  if (itemReview.length !== 0) {
    return (
      <div>
        <div>
          
        </div>
        <div>
          <h4>Item Post</h4>
          {
            itemReview.map((post) => {
              return (
                <div key={post.id}>
                  <div>

                  </div>
                  <div>
                    <ul>
                      <li>Rating: {post.rating}</li>
                      <li>Description: {post.description}</li>
                    </ul>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h4>No Reviews Yet</h4>
      </div>
    );
  }
};

export default ItemPost;