import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleBookmark from './SingleBookmark.jsx';

const BookmarkList = ({user, itemList}) => {

  const [userBookmarkList, setUserBookmarkList] = useState([]);

  const userBookmark = () => {
    axios.get(`/mark/userBookmark/${user.id}`)
      .then(({data}) => {
        // console.log(data, 'bookDATA');
        setUserBookmarkList(data);
      }).catch((err) => console.error('BookMarkGetAxiosErr'));
  };

  useEffect(() => {
    userBookmark();
  }, []);

  return (
    <div>
      <h1>Bookmark item page</h1>
      {
        userBookmarkList.map((bookmark) => {
          // console.log(bookmark.itemId);
          return (
            <div key={bookmark.id}>
              <SingleBookmark bookmark={bookmark}/>
            </div>
          );
        })
      }
    </div>
  );
};

export default BookmarkList;