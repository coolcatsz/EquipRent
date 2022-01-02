import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SingleBookmark = ({bookmark}) => {
  console.log(bookmark, 'SINGLEBOOK');
  const [allBookmark, setAllBookmark] = useState({});

  const bookmarkItem = () => {
    axios.get(`/item/itemById/${bookmark.itemId}`)
      .then(({ data }) => {
        setAllBookmark(data);
      }).catch((err) => console.error('BookErr'));
  };

  useEffect(() => {
    bookmarkItem();
  }, []);
  return (
    <div>
      <p>Bookmark {allBookmark.brand}</p>
    </div>
  );
};

export default SingleBookmark;