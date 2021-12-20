import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Lender = ({user}) => {
  const { register, handleSubmit } = useForm();

  const listItem = data => {
    // e.preventDefault();
    // console.log(data);
    axios.post('item/newItems', {
      brand: data.brand,
      type: data.type,
      price: data.price,
      condition: data.condition,
      value: data.value,
      availability: true,
      description: data.description,
      userId: user.id
    }).then(() => {
      console.log('Item successfully Listed!');
    }).catch((err) => {
      console.error('Item listing error')
    });
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
};

export default Lender;