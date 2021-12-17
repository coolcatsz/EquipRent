import { FileUpload, FileUploadRounded } from '@mui/icons-material';
import React from 'react';
import { useForm } from "react-hook-form";

const Lender = () => {

  const { register, handleSubmit } = useForm();
  // const { selectedFile, setSelectedFile } = useState(null);
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div>
      <h2>Lender Page 5555555555555555</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Item For Rent
        </label>
        <input {...register("itemforLease")} />
        {/* <FileUploaded
          onFileSeclectSuccess={(file) => setSelectedFile(file)}
          onFileSelectetError={({error}) => alert(error)}
        /> */}
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