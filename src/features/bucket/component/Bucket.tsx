
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField
} from '@mui/material';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import {BucketInterface} from "./BucketList";
import List from "@mui/material/List";
import {Delete} from "@mui/icons-material";


interface BucketProps {
  title: string;
  products : string[];

  setBucketList: (bucketList: BucketInterface[]) => void;
  handleBucketDelete: (bucketName: string) => void;
  bucketList: BucketInterface[];
}

export function Bucket(props: BucketProps): JSX.Element {
  const [openDialog, setOpenDialog] = useState(false);

  const [productList, setProductList] = useState(props.products);

  const [addedProductName, setAddedProductName] = useState('');

  const [openProductDialog, setOpenProductDialog] = useState(false);



  const handleProductAdding = () => {
    props.products.push(addedProductName);
    setOpenProductDialog(false);
    setProductList([...props.products]);

    setAddedProductName('')
  };

  const handleProductRemove = (productName: string) => {
    const index = props.products.indexOf(productName, 0);
    if (index > -1) {
      props.products.splice(index, 1);
    }

    setProductList([...props.products]);


  };

  const handleCloseAddProductDialog = () => {
    setOpenProductDialog(false);
  };


  function handleOpenAddProductDialog() {
    setOpenProductDialog(true);
  }




  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  function handleOpenDialog() {
    setOpenDialog(true);
  }


  return (
      <>
      <ListItem disablePadding >
        <ListItemButton onClick={handleOpenDialog}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItemButton>



      <ListItemButton onClick={() => {
        props.handleBucketDelete(props.title)
      }}
        sx={{
          justifyContent: 'flex-end',
        }}

      >
        <ListItemIcon>
          <Delete></Delete>
        </ListItemIcon>
      </ListItemButton>

      </ListItem>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>


          <List>

            {
              productList.map((product) => (
                  <div id={props.title + product}>
                    <Product handleProductRemove={handleProductRemove} productName={product} products={props.products} />
                  </div>
              ))
            }

          </List>


          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleOpenAddProductDialog}>
            Pridať produkt do košíka
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Zrušiť
          </Button>
          <Button  color="primary" onClick={ () => {handleCloseDialog()}}>
            Uložiť košík
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add product  modal*/}

      <Dialog open={openProductDialog} onClose={handleCloseAddProductDialog}>
          <DialogTitle>Pridať produkt</DialogTitle>
          <DialogContent>
            <TextField
                label="Názov produktu"
                fullWidth
                value={addedProductName}
                onChange={(e) => setAddedProductName(e.target.value)}
                sx={{ mb: 2 }}
            />

            <TextField
                label="Značka"
                fullWidth
                // value={brand}
                // onChange={(e) => setBrand(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Obchod"
                fullWidth
                // value={store}
                // onChange={(e) => setStore(e.target.value)}
                sx={{ mb: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAddProductDialog} color="primary">
              Zrušiť
            </Button>
            {/*<Button onClick={handleSaveProduct} color="primary">*/}
            <Button color="primary" onClick={handleProductAdding}>
              Pridať produkt
            </Button>
          </DialogActions>
      </Dialog>




      </>
  );
}



interface ProductProps {
  productName: string;
  products : string[]
  handleProductRemove: (productName: string) => void;
}

const Product = (props : ProductProps) => {

  return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.productName} />
        </ListItemButton>


        <ListItemButton onClick={() => {
          props.handleProductRemove(props.productName)
        }}

          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <ListItemIcon
              sx={{
                justifyContent: 'flex-end',
              }}
          >
            <Delete></Delete>
          </ListItemIcon>
        </ListItemButton>


      </ListItem>
  )
}