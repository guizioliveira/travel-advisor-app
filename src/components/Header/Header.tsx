import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    InputBase, 
    Box 
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar 
            className={classes.primaryColor} 
            position='static'
        >
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Search/>
                            </div>
                                <InputBase placeholder="Explore new places..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;