import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/coolcatz/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'ny4zarxq';
import { Paper, Typography, Button, TextField, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Lender = ({ user, getAllItem }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const notify = (data) => toast.success('Successfully created listing!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const uploadImage = (files, id) => {
    const formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios.post(
      CLOUDINARY_URL, formData)
      .then((response) => {
        const { url } = response.data;
        saveUrlToDb(url, id);
      }).then(() => {
        notify();
      }).then(() => {
        console.log('hiiiiii!');
        navigate('/');
      });
  };
  const listItem = data => { 
    axios.post('item/newItems', {
      brand: data.brand,
      type: data.type,
      price: data.price,
      condition: data.condition,
      value: data.value,
      availability: true,
      description: data.description,
      userId: user.id
    }).then((response) => {
      uploadImage(data.itemImg[0], response.data.id);
      getAllItem();
    }).catch((err) => {
      console.error('Item listing error');
    });
  };

  const saveUrlToDb = (imgUrl, itemId) => {
    axios.post('item/newItemImg', {
      imgUrl: imgUrl,
      itemId: itemId,
    }).then(() => {
      console.log('successful image upload!');
    }).catch((err) => {
      console.error('image upload error');
    });
  };

  return (
    <Grid container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: '100%', marginTop: '150px' }}

    >
      <div style={{display: 'inline-block'}}>
        <Paper>
          <Typography align="center" variant="h2">List an Item</Typography>
          <form onSubmit={handleSubmit(listItem)}>
            <div style={{ padding: '10px' }} spacing={5}>
   
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Item For Rent" variant="outlined" input {...register('brand')}/></div>
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Category" variant="outlined" input {...register('type')}/></div>
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Item Description" variant="outlined" input {...register('description')}/></div>
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Rental Fee" variant="outlined" type='number' input {...register('price')}/></div>
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Accessed Value" variant="outlined" type='number' input {...register('value')}/></div>
              <div style={{ padding: '6px' }}><TextField id="outlined-basic" fullWidth label="Condition" variant="outlined" input {...register('condition')}/></div>
              <div style={{ padding: '6px' }}><label>Upload an image of the item</label><input {...register('itemImg')} type="file"/></div>
              <div style={{ padding: '6px' }}><Button type="submit" fullWidth variant="contained" style={{padding: '10px'}} color="success">Upload Item</Button></div>
           
            </div>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};

export default Lender;