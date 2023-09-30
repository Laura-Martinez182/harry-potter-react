import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SideMenu from './SideMenu';
import { useNavigate } from "react-router-dom";

const NavBar = ({pageName}) =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isUserLogged, setIsUserLogged] = React.useState(false);

  const navigate = useNavigate()
  const navigateToUrl = (url) => {navigate(url);}

  const toggleDrawer = (isOpen) => setIsDrawerOpen(isOpen);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogOut = () => {
    handleClose()
    setIsUserLogged(false)    
    console.log("Handle LogOut")
  }

  const handleLogIn = () => {
    handleClose()  
    setIsUserLogged(true)
    navigateToUrl("/login")  
    console.log("Handle LogIn")
  }

  return (
    <nav>
    <SideMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} handleClick={navigateToUrl}/>
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {isUserLogged && (<MenuItem onClick={() => handleLogOut()}>Log out</MenuItem>)}
                {!isUserLogged && (<MenuItem onClick={() => handleLogIn()}>Log In</MenuItem>)}
              </Menu>
            </div>          
        </Toolbar>
      </AppBar>
    </Box>
    </nav>
  );
}

NavBar.defaultProps = {
    pageName: "Home"
}

export default NavBar;


