import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

interface HeaderProps {
  setCoordinates: (coord: GoogleMapReact.Coords) => void;
}

const Header: React.FC<HeaderProps> = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  return (
    <AppBar className={classes.primaryColor} position="static">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center" gridGap="1rem">
          <Box
            className="logo"
            component="img"
            sx={{
              height: 50,
              width: 50,
            }}
            alt="The house from the offer."
            src="travel.svg"
          />
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
        </Box>
        <Box display="flex">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                id="searchInput"
                placeholder="Explore new places..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
