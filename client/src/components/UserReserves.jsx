import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleRentedItem from './SingleUserReserve.jsx';
import Carousel from 'react-grid-carousel';

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

  const uniqueReserves = [...new Map(rentList.map(item => [item.itemId, item])).values()];
  if (uniqueReserves.length !== 0) {
    return (
      <div >
        <Carousel cols={3}>
          {
            uniqueReserves.map((item) => {
              return (
                <Carousel.Item key={item.id}>
                  <SingleRentedItem rentItem={item} authUser={authUser} />
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
        <h3>No reservations yet!!</h3>
      </div>
    );
  }
};

export default RentedItems;
