import * as React from 'react';
import {useContext} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {MenuDrawerContext} from "../context/MenuDrawerContext";
import {useNavigate} from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerWidth = 240;

export default function MenuDrawer() {
  const theme = useTheme();

  const {open, setOpen} = useContext(MenuDrawerContext);

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
      <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <SwipeableDrawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                height: '100vh',
                boxSizing: 'border-box',
              },
            }}
            // variant="temporary"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
        >
          {/*<Box sx={{flexDirection: 'row'}}>*/}
            <IconButton onClick={handleDrawerClose}
              sx={{
                justifyContent: 'flex-end', alignItems: 'center',
                marginRight: "10px",
            }}
            >
              {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
          {/*</Box>*/}
          <Divider/>
          <List>
            <ListItem key={"Main"} disablePadding onClick={() => {
              navigate("/")
              setOpen(false)
            }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={"Main"}/>
              </ListItemButton>
            </ListItem>
            <ListItem key={"Buckets"} disablePadding onClick={() => {
              navigate("/buckets")
              setOpen(false)
            }}>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={"Buckets"}/>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider/>
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </Box>
  );
}
