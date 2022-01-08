import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/coolcatz/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "ny4zarxq";

const Lender = ({user}) => {
  const { register, handleSubmit } = useForm();

  const uploadImage = (files, id) => {
    const formData = new FormData();
    formData.append("file", files);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    axios.post(
      CLOUDINARY_URL, formData)
      .then((response) => {
        const { url } = response.data;
        console.log(url);
        console.log(id);
        saveUrlToDb(url, id);
    });
  }
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
      console.error('Item listing error')
    });
  }

  const saveUrlToDb = (imgUrl, itemId) => {
    axios.post('item/newItemImg', {
      imgUrl: imgUrl,
      itemId: itemId,
    }).then(() => {
      console.log('successful image upload!');
    }).catch((err) => {
      console.error('image upload error');
    })
  }

  return (
    <div style={{display: 'inline-block'}}>
      <h2>Make a listing for an Item:</h2>
      <form onSubmit={handleSubmit(listItem)}>
        <div>
          <ul>
            <li><label>Item For Rent</label><input {...register("brand")} /></li>
            <li><label>Category</label><input {...register("type")} /></li>
            <li><label>Item Description</label><input {...register("description")} /></li>
            <li><label>Rental Fee</label><input {...register("price")} /></li>
            <li><label>Accessed Value</label><input {...register("value")} /></li>
            <li><label>Item Condition</label><input {...register("condition")} /></li>
            <li><label>Upload an image of the item</label><input {...register("itemImg")} type="file"/></li>
            <input type="submit" value="submit" />
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Lender;