import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ItemPost = ({currentItem}) => {

  const [itemReview, setItemReview] = useState([]);

  const allItemPost = () => {
    axios.get(`/post/itemPost/${currentItem.id}`)
      .then(({ data }) => {
        console.log(data, 'DATA');
        setItemReview(data);
      }).catch((err) => console.error('ItemPost Err'));
  };

  useEffect(() => {
    allItemPost();
  }, []);

  if (itemReview.length !== 0) {
    return (
      <div>
        <h4>Item Post</h4>
        {
          itemReview.map((post) => {
            // console.log(post, 'POST');
            return (
              <div key={post.id}>
                <ul>
                  <li>Rating: {post.rating}</li>
                  <li>Description: {post.description}</li>
                </ul>
              </div>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>
        <h4>Be the first to review this product</h4>
      </div>
    );
  }
};

export default ItemPost;