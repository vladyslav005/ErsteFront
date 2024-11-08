import React, {useState} from 'react';
import Button from "@mui/material/Button";


export const BillUpload = () => {
  // const classes = useStyles();

  const [source, setSource] = useState("");


  const handleCapture = (target: any) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (

      <label htmlFor="icon-button-file">
        <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
            style={{display: 'none'}} // Hide the input
        />

        <Button variant="contained" component="span" color="primary" sx={{mr: 2}}>
          Scan Bill
        </Button>
      </label>

  );
}
