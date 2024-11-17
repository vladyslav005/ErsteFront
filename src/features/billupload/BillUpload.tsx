import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Paper} from "@mui/material";
import {CameraAltOutlined} from "@mui/icons-material";


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

        {/*<Paper elevation={24} sx={{ bgcolor: 'primary.main', padding: '0px', mr:2}}>*/}
          <Button disableElevation={false} variant="contained" component="div" sx={{ mr:4}}
            startIcon={<CameraAltOutlined/>}
          >
            Scan Bill
          </Button>
        {/*</Paper>*/}
      </label>

  );
}
