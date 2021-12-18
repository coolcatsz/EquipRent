import { FileUpload, FileUploadRounded } from '@mui/icons-material';
import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Lender = () => {

  const { register, handleSubmit } = useForm();
  // const { selectedFile, setSelectedFile } = useState(null);
  const onSubmit = data => {
    // data.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <h2>Make a listing for an Item:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
        Item For Rent
        </label>
        <input {...register("itemforLease")} />

        <label>
        Upload an image of the item
        </label>
        <input {...register("itemImg")} type="file"/>

        <label>
        Category
        </label>
        <input {...register("itemCategory")} />

        <label>
        Item Description
        </label>
        <input {...register("itemDescription")} />

        <label>
        Accessed Value
        </label>
        <input {...register("itemValue")} />

        <label>
        Item Condition
        </label>
        <input {...register("itemCondition")} />
        

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Lender;