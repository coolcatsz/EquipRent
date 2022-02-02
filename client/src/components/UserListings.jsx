import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import SingleListing from './SingleListing.jsx';
import { Button } from '@mui/material';
import Carousel from 'react-grid-carousel';

const Listings = ({listingClick}) => {
  const { userId } = useParams();
  const [userListing, setUserListing] = useState([]);

  useEffect(() => {
    const allListings = () => {
      axios.get(`/item/userItem/${userId}`)
        .then(({data}) => setUserListing(data))
        .catch((err) => console.log('listings Err'));
    };
    if (userId) {
      allListings();
    }
  }, [userId]);

  if (userListing.length !== 0) {
    return (
      <div>
        <Carousel cols={4}>
          {
            userListing.map((list) => {
              return (
                <Carousel.Item key={list.id}>
                  <SingleListing list={list} listingClick={listingClick}/>
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No Listings</h3>
        <Button
          component={Link}
          to="/lender"
          style={{ textDecoration: 'none' }}
        >
            Upload Listing
        </Button>
      </div>
    );
  }
};

export default Listings;