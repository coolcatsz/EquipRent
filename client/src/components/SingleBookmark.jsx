import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SingleBookmark = ({bookmark}) => {

  const [allBookmark, setAllBookmark] = useState({});

  const bookmarkItem = () => {
    axios.get(`/item/itemById/${bookmark.itemId}`)
      .then(({ data }) => {
        console.log(data, 'bookmarkbyid');
        setAllBookmark(data);
      }).catch((err) => console.error('Errr'));
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