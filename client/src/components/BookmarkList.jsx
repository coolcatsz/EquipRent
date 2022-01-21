import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SingleBookmark from './SingleBookmark.jsx';

const BookmarkList = ({user, currentItem}) => {

  const [userBookmarkList, setUserBookmarkList] = useState([]);

  const userBookmark = () => {
    axios.get(`/mark/userBookmark/${user.id}`)
      .then(({data}) => setUserBookmarkList(data))
      .catch((err) => console.error('BookMarkGetAxiosErr'));
  };

  useEffect(() => {
    userBookmark();
  }, []);

  const uniqueObjects = [...new Map(userBookmarkList.map(item => [item.itemId, item])).values()];

  if (uniqueObjects.length !== 0) {
    return (
      <div style={{ height: '100vh' }}>
        {
          uniqueObjects.map((bookmark) => {
            return (
              <div key={bookmark.id}>
                <SingleBookmark bookmark={bookmark} currentItem={currentItem} />
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div style={{ height: '100vh' }}>
        <h2>No Bookmarks</h2>
      </div>
    );
  }
};

export default BookmarkList;