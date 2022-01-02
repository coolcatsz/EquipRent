import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleBookmark from './SingleBookmark.jsx';

const BookmarkList = ({user, currentItem}) => {

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
          return (
            <div key={bookmark.id}>
              <SingleBookmark bookmark={bookmark} currentItem={currentItem} />
            </div>
          );
        })
      }
    </div>
  );
};

export default BookmarkList;