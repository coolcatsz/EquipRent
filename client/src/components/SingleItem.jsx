import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItemPost from './ItemPost.jsx';
import Calendar from './Calendar.jsx';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@material-ui/core/Paper';

const SingleItem = ({user, currentItem, addBookmark, appUser, userClick}) => {
  const {itemId} = useParams();

  const [itemReview, setItemReview] = useState([]);
  const [singleItemImg, setSingleItemImg] = useState({});

  const oneItemImg = () => {
    axios.get(`/item/itemImg/${currentItem.id}`)
      .then(( {data} ) => setSingleItemImg(data[0]))
      .catch((err) => console.error('GetAxiosErr'));
  };

  const allItemPost = () => {
    axios.get(`/post/itemPost/${itemId}`)
      .then(({ data }) => setItemReview(data))
      .catch((err) => console.error('ItemPost Err'));
  };

  useEffect(() => {
    oneItemImg();
    allItemPost();
  }, [itemId]);

  let image;
  if (currentItem.id === singleItemImg.itemId) {
    image = singleItemImg.imgUrl;
  }

  return (
    <div>
      {
        appUser.map((person) => {
          if (person.id === currentItem.userId) {
            return (
              <div key={person.id} style={{marginTop: '50px'}}>
                <div style={{display: 'inline-flex', padding: '10px', marginLeft: '70px'}}>
                  <div style={{marginLeft: '20px'}}>
                    <Card sx={{ maxWidth: 345 }}>
                      <Paper>
                        <CardMedia
                          component="img"
                          alt="Item Img"
                          style ={{ width: '200px', height: '200px', border: '5px solid black', marginLeft: '65px'}}
                          image={`${image}`}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Brand: {currentItem.brand}
                          </Typography>
                          <Typography variant="h6" color="text.secondary">
                          Type: {currentItem.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Description: {currentItem.description}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Condition: {currentItem.condition}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Price: ${currentItem.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                          Product Value: ${currentItem.value}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <div>
                            <Typography>
                              <Button size="small" color="success" onClick={addBookmark} >Bookmark</Button>
                              <Button
                                color="success"
                                component={Link}
                                to={`/profile/${person.id}`}
                                onClick={() => userClick(person)}
                              >
                                <AccountCircleIcon/>
                                {person.username}
                              </Button>
                            </Typography>
                          </div>
                        </CardActions>
                      </Paper>
                    </Card>
                  </div>
                  <div style={{marginLeft: '100px'}}>
                    <Calendar currentItem={currentItem} user={user} />
                  </div>
                </div>
                <div style={{marginLeft: '100px'}}>
                  <ItemPost itemReview={itemReview} currentItem={currentItem} user={user}/>
                </div>
              </div>
            );
          }
        })
      }
    </div>
  );
};

export default SingleItem;