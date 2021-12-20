import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Lender = () => {

  const { register, handleSubmit } = useForm();
  // const { selectedFile, setSelectedFile } = useState(null);
  const listItem = e => {
    // e.preventDefault();
    axios.post('item/newItems', {
      brand,
      type,
      condition,
      value,
      description,
      userId: user.id,
    }).then(() => {
      console.log('Item successfully Listed!');
    }).catch((err) => console.error('Item listing error'));
  }

  //brand, type, price, condition, value, availability, description, itemId, userId } = req.body;
  return (
    <div>
      <h2>Make a listing for an Item:</h2>
      <form onSubmit={handleSubmit(listItem)}>
      
        <label>
        Item For Rent
        </label>
        <input {...register("brand")} />

        <label>
        Upload an image of the item
        </label>
        <input {...register("itemImg")} type="file"/>

        <label>
        Category
        </label>
        <input {...register("type")} />

        <label>
        Item Description
        </label>
        <input {...register("itemDescription")} />

        <label>
        Accessed Value
        </label>
        <input {...register("value")} />

        <label>
        Item Condition
        </label>
        <input {...register("condition")} />
        

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Lender;