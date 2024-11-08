import * as React from 'react';
import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {MenuDrawerContext} from "../../menudrawer/context/MenuDrawerContext";
import {BillUpload} from "../../billupload/BillUpload";


export const OurAppBar = () => {

  const {open, setOpen} = useContext(MenuDrawerContext);

  return (

      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar variant="dense"
                   sx={{
                     justifyContent: 'flex-end',
                     backgroundColor: ''
                   }}
          >


            <BillUpload></BillUpload>


            <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}
                        onClick={() => {
                          setOpen(true)
                        }}
            >
              <MenuIcon/>
            </IconButton>


            <Typography variant="h6" color="inherit" component="div">

            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

  )


}