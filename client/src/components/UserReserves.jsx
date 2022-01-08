import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleRentedItem from './SingleUserReserve.jsx';

const RentedItems = ({ profile }) => {
  const { id } = profile;
  console.log(profile, 'PROFILE', id);
  const [authRentList, setAuthRentList] = useState([]);

  const userRentList = () => {
    axios.get(`/reserve/userReserve/${id}`)
      .then(({ data }) => console.log(data))
      .catch((err) => console.error('errr'));
  };

  useEffect(() => {
    userRentList();
  }, []);

  return (
    <div>
      {/* {
        authRentList.map((item) => {
          console.log(item, 'item');
          // if (authUser.id) {
          //   // console.log(authUser.id, user.id);
          //   return (
          //     <div key={item.id}>
          //       <RentedItems/>
          //     </div>
          //   );
          // }
        })
      } */}
      <h1>User's Rented items list</h1>
    </div>
  );
};

export default RentedItems;