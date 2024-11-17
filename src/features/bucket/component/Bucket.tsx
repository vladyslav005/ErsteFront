import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import {BucketInterface} from "./BucketList";
import List from "@mui/material/List";
import {Delete} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {red} from "@mui/material/colors";
import Divider from "@mui/material/Divider";


interface BucketProps {
  title: string;
  products: string[];

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
        <ListItem disablePadding sx={{position: 'relative'}}>
          <ListItemButton onClick={handleOpenDialog}>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={props.title}/>
          </ListItemButton>



          <IconButton onClick={() => {
            props.handleBucketDelete(props.title)
          }}
            sx={{
              marginRight: 2,
              right: "0",
              position: 'absolute',
            }}
          >
            <Delete sx={{color: red[300]}}></Delete>
          </IconButton>

        </ListItem>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>


            <List>

              {
                productList.map((product) => (
                    <>
                    <div id={props.title + product}>
                      <Product handleProductRemove={handleProductRemove} productName={product}
                               products={props.products}/>
                    </div>
                    </>

                ))
              }

            </List>


            <Button variant="contained" fullWidth sx={{mt: 2}} onClick={handleOpenAddProductDialog}>
              Pridať produkt do košíka
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Zrušiť
            </Button>
            <Button color="primary" onClick={() => {
              handleCloseDialog()
            }}>
              Uložiť košík
            </Button>
          </DialogActions>
        </Dialog>

        {/* Add product  modal*/}

        <Dialog open={openProductDialog} onClose={handleCloseAddProductDialog}>
          <DialogTitle>Pridať produkt</DialogTitle>
          <DialogContent sx={{marginTop: 2}}>
            <TextField
                label="Názov produktu"
                fullWidth
                value={addedProductName}
                onChange={(e) => setAddedProductName(e.target.value)}
                sx={{mb: 2}}
            />

            <TextField
                label="Značka"
                fullWidth
                // value={brand}
                // onChange={(e) => setBrand(e.target.value)}
                sx={{mb: 2}}
            />
            <TextField
                label="Obchod"
                fullWidth
                // value={store}
                // onChange={(e) => setStore(e.target.value)}
                sx={{mb: 2}}
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
  products: string[]
  handleProductRemove: (productName: string) => void;
}

const Product = (props: ProductProps) => {

  return (
      <>
      <ListItem disablePadding>
        <ListItemText primary={props.productName}  sx={{padding: -1}} ></ListItemText>


        {/*<ListItemButton onClick={() => {*/}
        {/*  props.handleProductRemove(props.productName)*/}
        {/*}}*/}

        {/*  sx={{*/}
        {/*    justifyContent: 'flex-end',*/}
        {/*  }}*/}
        {/*>*/}
          <IconButton
              sx={{
                justifyContent: 'flex-end',
              }}
          >
            <Delete sx={{color: red[300]}}></Delete>
          </IconButton>
        {/*</ListItemButton>*/}


      </ListItem>
      <Divider variant="fullWidth" sx={{zIndex: 1000} } />

      </>
  )
}