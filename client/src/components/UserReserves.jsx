import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleRentedItem from './SingleUserReserve.jsx';

const RentedItems = ({ profile, authUser }) => {
  // console.log(profile, 'PROFILE', profile.id);
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
};

export default RentedItems;
