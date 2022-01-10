import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/coolcatz/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'ny4zarxq';
import { Button } from '@mui/material';
import TextField from '@material-ui/core/TextField';

const Lender = ({user}) => {
  const { register, handleSubmit } = useForm();

  const uploadImage = (files, id) => {
    const formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios.post(
      CLOUDINARY_URL, formData)
      .then((response) => {
        const { url } = response.data;
        console.log(url);
        console.log(id);
        saveUrlToDb(url, id);
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
    <div style={{display: 'inline-block'}}>
      <h2>Make a listing for an Item:</h2>
      <form onSubmit={handleSubmit(listItem)}>
        <div style={{ padding: '10px' }} spacing={5}>
          <ul>
            <div><TextField id="outlined-basic" fullWidth label="Item For Rent" variant="outlined" input {...register('brand')}/></div>
            <div><TextField id="outlined-basic" fullWidth label="Category" variant="outlined" input {...register('type')}/></div>
            <div><TextField id="outlined-basic" fullWidth label="Item Description" variant="outlined" input {...register('description')}/></div>
            <div><TextField id="outlined-basic" fullWidth label="Rental Fee" variant="outlined" input {...register('price')}/></div>
            <div><TextField id="outlined-basic" fullWidth label="Accessed Value" variant="outlined" input {...register('value')}/></div>
            <div><TextField id="outlined-basic" fullWidth label="Condition" variant="outlined" input {...register('condition')}/></div>
            <div><label>Upload an image of the item</label><input {...register('itemImg')} type="file"/></div>
            <div><Button type="submit" fullWidth variant="contained" style={{padding: '10px'}} color="error">Upload Item</Button></div>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Lender;