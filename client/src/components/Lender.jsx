import { FileUpload, FileUploadRounded } from '@mui/icons-material';
import React from 'react';
import { useForm } from "react-hook-form";

const Lender = () => {

  const { register, handleSubmit } = useForm();
  // const { selectedFile, setSelectedFile } = useState(null);
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2>List an Item for Rent</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>
          Item For Rent
        </label>
        <input {...register("itemforLease")} />

        {/* <input ref={register} type="file" name="picture" onChange={onChange}/> */}

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