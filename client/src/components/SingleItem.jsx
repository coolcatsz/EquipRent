import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ItemPost from './ItemPost.jsx';
import Calendar from './Calendar.jsx';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@mui/material';


const SingleItem = ({user, currentItem, addBookmark, appUser, userClick}) => {
  const {itemId} = useParams();

  const [itemReview, setItemReview] = useState([]);
  const [singleItemImg, setSingleItemImg] = useState({});

  const oneItemImg = () => {
    axios.get(`/item/itemImg/${itemId}`)
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
    <div style={{height: '100vh', width: '100%'}}>
      {
        appUser.map((person) => {
          if (person.id === currentItem.userId) {
            return (
              <Grid key={person.id} >
                <div style={{ marginTop: '50px', display: 'inline-flex', marginLeft: '20px'}}>
                  <div style={{marginLeft: '20px'}}>
                    <img
                      src={`${image}`}
                      style ={{width: '300px', height: '300px', border: '1px solid grey', borderRadius: '20px', boxShadow: '5px 9px 16px -11px rgba(0,0,0,0.97)'}}
                    >
                    </img>
                    <Card sx={{ width: 350}} variant='none'>
                      <Paper>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                          Brand: {currentItem.brand}
                          </Typography>
                          <Typography variant="h6" >
                          Type: {currentItem.type}
                          </Typography>
                          <Typography variant="body2" >
                          Description: {currentItem.description}
                          </Typography>
                          <Typography variant="body2" >
                          Condition: {currentItem.condition}
                          </Typography>
                          <Typography variant="body2" >
                          Price: ${currentItem.price}
                          </Typography>
                          <Typography variant="body2" >
                          Product Value: ${currentItem.value}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <div>
                            <Typography>
                              <Button size="small" color="success" onClick={addBookmark} >Bookmark</Button>
                              <Button
                                size="small"
                                component={Link}
                                to={`/chat/${currentItem.type}`}
                                color="success"
                              >
                                <EmailIcon/>
                                Chat
                              </Button>
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
                <div>
                  <ItemPost itemReview={itemReview} currentItem={currentItem} user={user}/>
                </div>
              </Grid>
            );
          }
        })
      }
    </div>
  );
};

export default SingleItem;