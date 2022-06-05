import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';

//Icons
import LoginIcon from '@mui/icons-material/Login';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import InfoIcon from '@mui/icons-material/Info';




const Header = () => {

  const [open, setOpen] = useState(false);

  const handleToggle = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      //changes the function state according to the value of open
      setOpen(open);
  };


    return(
      <Box sx={{ flexGrow: 0}}>
          <AppBar position="static">
              <Toolbar>
                    <Box sx={{ flexGrow: '1'}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 0 }}
                            onClick={handleToggle(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Drawer
                        anchor='left'
                        open={open}
                        onClose={handleToggle(false)}
                    >
                        <Box
                            sx={{ width: 250}}
                        >
                            <List>
                                <ListItemButton component={Link} to="/">
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home"/>
                                </ListItemButton>
                                <ListItemButton component={Link} to="/tasks">
                                    <ListItemIcon>
                                        <AssignmentTurnedInIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Tasks"/>
                                </ListItemButton>
                                <ListItemButton component={Link} to="/about">
                                    <ListItemIcon>
                                        <InfoIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="About"/>
                                </ListItemButton>

                                <Divider />

                                <ListItemButton component={Link} to="/login">
                                    <ListItemIcon>
                                        <LoginIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Login"/>
                                </ListItemButton>
                                <ListItemButton component={Link} to="/register">
                                    <ListItemIcon>
                                        <GroupAddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Register" />
                                </ListItemButton> 
                            </List> 
                        </Box>         
                    </Drawer>
                    <LoggedIn />  
              </Toolbar>
          </AppBar>
      </Box>  
    );
}

export default Header;