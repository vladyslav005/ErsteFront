import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Bucket} from "./Bucket";
import {useContext, useState} from "react";
import {Delete} from "@mui/icons-material";
import Add from "@mui/icons-material/Add";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {BucketContext} from "../context/BucketContext";


export interface BucketInterface {
  name: string,
  products: string[],
}



export const BucketList = () => {

  // const [bucketList, setBucketList] = useState<BucketInterface[]>([
  //   {
  //     name: "Example Bucket",
  //     products: ["Product 1", "Product 2"],
  //   }
  // ])
  const {bucketList, setBucketList} = useContext(BucketContext)


  const [addBucketDialog, setAddBucketDialog] = useState(false)

  const [addBucketName, setAddBucketName] = useState<string | null>(null)

  function handleDeleteBucket(bucketName : string) {
    let index = -1
    for (let i = 0; i < bucketList.length; i++) {
      const bucket = bucketList[i];
      if (bucket.name === bucketName) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      bucketList.splice(index, 1);
    }

    setBucketList([...bucketList]);
  }

  function handleOpenAddBucket() {
    setAddBucketDialog(true)
  }

  function handleCloseAddBucket() {
    setAddBucketDialog(false)
  }

  function handleBucketAdding() {
    if (!addBucketName) {return}
    bucketList.push({name: addBucketName, products: []})
    setBucketList([...bucketList])
    setAddBucketName(null)
    setAddBucketDialog(false)
  }

  return (
      <>
      <Box sx={{ width: '100vw', bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>

            {bucketList.map((item, index) => (
                <Bucket title={item.name} products={item.products}
                        bucketList={bucketList} handleBucketDelete={handleDeleteBucket}
                        setBucketList={setBucketList} key={index}/>
            ))}

            <ListItem disablePadding onClick={() => {handleOpenAddBucket()}}>

              <ListItemButton sx={{justifyContent: 'center', alignItems: 'center'}}>

                <ListItemIcon sx={{justifyContent: 'center', alignItems: 'center'}}>
                  <Add />
                </ListItemIcon>

              </ListItemButton>

            </ListItem>



          </List>
        </nav>
        <Divider />
        {/*<nav aria-label="secondary mailbox folders">*/}
        {/*  <List>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton>*/}
        {/*        <ListItemText primary="Trash" />*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*    <ListItem disablePadding>*/}
        {/*      <ListItemButton component="a" href="#simple-list">*/}
        {/*        <ListItemText primary="Spam" />*/}
        {/*      </ListItemButton>*/}
        {/*    </ListItem>*/}
        {/*  </List>*/}
        {/*</nav>*/}
      </Box>


    <Dialog open={addBucketDialog} onClose={handleCloseAddBucket}>
      <DialogTitle>Add new bucket</DialogTitle>
      <DialogContent>
        <TextField
            label="Bucket name"
            fullWidth
            value={addBucketName}
            onChange={(e) => {
              setAddBucketName(e.target.value)
            }}
            sx={{ mb: 2 }}
        />


      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseAddBucket} color="primary">
          Cancel
        </Button>
        {/*<Button onClick={handleSaveProduct} color="primary">*/}
        <Button color="primary" onClick={handleBucketAdding}>
          Add Bucket
        </Button>
      </DialogActions>
    </Dialog>
  </>
  );
}