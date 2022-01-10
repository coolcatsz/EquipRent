import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleRentedItem from './SingleUserReserve.jsx';

const RentedItems = ({ profile, authUser }) => {

  const [rentList, setRentList] = useState([]);

  useEffect(() => {
    const userRentList = () => {
      axios.get(`/reserve/userReserve/${profile.id}`)
        .then(({ data }) => setRentList(data))
        .catch((err) => console.error('error'));
    };
    if (profile.id) {
      userRentList();
    }
  }, [profile]);

  if (rentList.length !== 0) {
    return (
      <div style={{display: '-webkit-inline-flex'}}>
        {
          rentList.map((item) => {
            return (
              <div key={item.id}>
                <SingleRentedItem rentItem={item} authUser={authUser} />
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>
        <h3>No reservations yet!!</h3>
      </div>
    );
  }
};

export default RentedItems;
