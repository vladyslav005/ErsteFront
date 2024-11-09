import * as React from 'react';
import {Global} from '@emotion/react';
import {styled} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {useUserLocation} from "../../../common/hook/LocationHook";
import {useContext} from "react";
import {BucketContext} from "../../bucket/context/BucketContext";
import {Bucket} from "../../bucket/component/Bucket";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Add from "@mui/icons-material/Add";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@mui/material/ListItemText";
import {BucketInterface, BucketList} from "../../bucket/component/BucketList";
import {LocationContext} from "../../map/context/LocationContext";


const drawerBleeding = 56;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Root = styled('div')(({theme}) => ({
  height: '100%',
  backgroundColor: grey[100],
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled('div')(({theme}) => ({
  backgroundColor: '#fff',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled('div')(({theme}) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}));


export const BottomSheet = (props: Props) => {
  const {window} = props;
  const [open, setOpen] = React.useState(false);


  const {bucketList, setBucketList} = useContext(BucketContext)


  const {markerLocation, setMarkerLocation} = useContext(LocationContext);

  const handleBucketProcessing = (bucketName: string) => {
    let index = -1
    for (let i = 0; i < bucketList.length; i++) {
      const bucket = bucketList[i];
      if (bucket.name === bucketName) {
        index = i;
        break;
      }
    }

    let bucket = bucketList[index]

    //SEND BUCKET TO BACK
    console.log(bucketName)


    fetch("http://172.20.10.4:8080/stores?userId=1&latitude=17.1071&longitude=48.1481&bucketId=6", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status} - ${response.statusText}`);
          }
          return response.json(); // Parse the response as JSON
        })
        .then(data => {
          console.log("Success:", data); // Log the parsed data
        })
        .catch(error => {
          console.error("Error:", error.message || error); // Display a meaningful error message
        });

  }


  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  // drawer-container
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
      <Root>
        <CssBaseline/>
        <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: 'visible',
              },
            }}
        />
        <Box sx={{textAlign: 'center', pt: 1}}>
          <Button onClick={toggleDrawer(true)}>Open</Button>
        </Box>
        <SwipeableDrawer
            container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}

        >
          <StyledBox
              sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
              }}
          >
            <Puller/>
            <Typography sx={{p: 2, color: 'text.secondary'}}>Choose bucket</Typography>
          </StyledBox>
          <StyledBox sx={{px: 2, pb: 2, height: '100%', overflow: 'auto'}}>

            <List>


              {
                bucketList.map((bucket : BucketInterface) => (
                    <ListItemButton onClick={() => handleBucketProcessing(bucket.name)} key={bucket.name}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary={bucket.name} />
                    </ListItemButton>
                ))
              }


            </List>


          </StyledBox>
        </SwipeableDrawer>
      </Root>
  );
}
