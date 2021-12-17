import React from 'react';
import { useForm } from "react-hook-form";

const Lender = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <h2>Lender Page</h2>
      <form onSumbit={handleSubmit(onSubmit)}>
        <label>
          Item For Rent
        </label>
        <input {...register("itemforLease")} />
        <label>
          Item Description
        </label>
        <input {...register("itemDescription")} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Lender;