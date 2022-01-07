import React, {useState, useEffect} from 'react';
import axios from 'axios';
const RentedItems = ({user, authUser, appUser, allUsers}) => {

  const [authRentList, setAuthRentList] = useState([]);
  const [nonAuthRentList, setNonAuthRentList] = useState([]);

  const authUserRentList = () => {
    axios.get(`/reserve/userReserve/${authUser.id}`)
      .then(({ data }) => setAuthRentList(data))
      .catch((err) => console.error('errr'));
  };

  const nonAuthUserRentList = () => {
    axios.get(`/reserve/userReserve/${appUser.id}`)
      .then(({data}) => setNonAuthRentList(data))
      .catch((err) => console.error('nonAuthUseErr'));
  };

  // const reservationItems = () => {
  //   axios.get(`item/itemById/${}`)
  // };

  useEffect(() => {
    authUserRentList();
    nonAuthUserRentList();
  }, []);

  console.log(authRentList);
  return (
    <div>
      <h1>User's Rented</h1>
    </div>
  );
};

export default RentedItems;