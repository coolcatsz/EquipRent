import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SingleListing = ({ list }) => {

  console.log(list);
  const [listImg, setListImg] = useState({});

  const listingImg = () => {
    axios.get(`/item/itemImg/${list.id}`)
      .then(({data}) => setListImg(data[0]))
      .catch((err) => console.error('ListImgErr'));
  };

  useEffect(() => {
    listingImg();
  }, []);

  return (
    <div>
      <img src={listImg.imgUrl} style ={{width: '200px', height: '200px'}}></img>
      <h3>
        {list.brand}
      </h3>
    </div>
  );
};

export default SingleListing;