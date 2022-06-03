import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  console.log(open);


    return(
      <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
              <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0}}
                        onClick={handleToggle(true)}
                    >
                        <MenuIcon />
                    </IconButton>
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
                                    <ListItemText primary="register" />
                                </ListItemButton> 
                            </List> 
                        </Box>         
                    </Drawer>     
              </Toolbar>
          </AppBar>
      </Box>  
    );
}
/* <div>
            <div id="nav-left">
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/tasks">Tasks</Link></li>
            <li><Link  to="/about">About</Link></li>
            </div>
            <div id="nav-right">
            <li><Link  to="/login">Login</Link></li>
            <li><Link  to="/register">Register</Link></li>
            </div>
        </div> */

export default Header;