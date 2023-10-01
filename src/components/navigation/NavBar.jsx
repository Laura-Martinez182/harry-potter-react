import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { logout, selectPerson } from "../../redux/reducers/PersonSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({ pageName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  //const [isUserLogged, setIsUserLogged] = React.useState(auth.currentUser != null);

  const navigate = useNavigate();
  const navigateToUrl = (url) => {
    navigate(url);
  };

  const toggleDrawer = (isOpen) => setIsDrawerOpen(isOpen);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);
  const dispatch = useDispatch();
  const user = useSelector(selectPerson);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        //setIsUserLogged(false)
        console.log("Signed out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const handleLogIn = () => {
    handleClose();
    //setIsUserLogged(true);
    navigateToUrl("/login");
    console.log("Handle LogIn");
  };

  return (
    <nav>
      <SideMenu
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        handleClick={navigateToUrl}
      />
      <Box sx={{ flexGrow: 1, height: "8%" }}>
        <AppBar position="absolute" color="primary" sx={{ height: "8%" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
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
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {user ? (
                  <MenuItem onClick={() => handleLogOut()}>Log out</MenuItem>
                ) : (
                  <MenuItem onClick={() => handleLogIn()}>Log In</MenuItem>
                )}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};

NavBar.defaultProps = {
  pageName: "Home",
};

export default NavBar;
