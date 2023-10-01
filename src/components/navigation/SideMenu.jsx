import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScienceIcon from '@mui/icons-material/Science';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

export default function SideMenu({isDrawerOpen, toggleDrawer, handleClick}) {

    const pagesIconDict = {
        "Home":<HomeIcon/>,
        "Movies":<LocalMoviesIcon/>,
        "Characters":<PeopleAltIcon/>,
        "Potions":<ScienceIcon/>
    };

    const pagesUrlDict = {
        "Home":"/",
        "Movies":"/movies",
        "Characters":"/characters",
        "Potions":"/potions"
    };

    const pagesList = () => (
        <Box onClick={() => toggleDrawer(false)}>     
            <List>
            {Object.entries(pagesIconDict).map(([page, icon]) => (
            <ListItem key={page} disablePadding>
                <ListItemButton onClick = {() => handleClick(pagesUrlDict[page])}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={page} />
                </ListItemButton>
            </ListItem>
            ))}       
        </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                {pagesList()}
            </Drawer>
            </React.Fragment>      
        </div>
    );
}