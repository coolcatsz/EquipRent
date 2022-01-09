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
    <div >
      <div style={{display: '-webkit-inline-flex'}}>
        {
          userListing.map((list) => {
            return (
              <div key={list.id}>
                <SingleListing list={list} userListing={userListing}/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Listings;