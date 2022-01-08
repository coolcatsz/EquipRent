import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import SingleListing from './SingleListing.jsx';

const Listings = () => {
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

  return (
    <div>
      <h1>User's Listings</h1>
      {
        userListing.map((list) => {
          return (
            <div key={list.id}>
              <SingleListing list={list} />
            </div>
          );
          // { userListing.length > 1 ? (
          //   <div>
          //     <SingleListing/>
          //   </div>
          // ) : (
          //   <div>
          //     <h5>no items posted yet!!</h5>
          //   </div>
          // ); }
        })
      }
    </div>
  );
};

export default Listings;