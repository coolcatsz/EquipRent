import React, {useState, useEffect} from 'react';
import axios from 'axios';


const BookmarkList = ({user, itemList}) => {
  console.log(user, 'BookItem');
  console.log(currentItem, 'List');
  const [bookmarkList, setBookmarkList] = useState([]);
  const [bookmarkItemById, setBookmarkItemById] = useState({});

  const userBookmark = () => {
    axios.get(`/mark/userBookmark/${user.id}`)
      .then(({data}) => {
        console.log(data, 'bookDATA');
        setBookmarkList(data);
      }).catch((err) => console.error('BookMarkGetAxiosErr'));
  };

  // const bookmarkItem = () => {
  //   axios.get(`/item/itemById/${}`)
  //     .then((data) => {
  //       console.log(data, 'bookmarkbyid');
  //     }).catch((err) => console.error('Errr'));
  // };

  useEffect(() => {
    userBookmark();
    // bookmarkItem();
  }, []);

  return (
    <div>
      <h1>Bookmark item page</h1>
    </div>
  );
};

export default BookmarkList;