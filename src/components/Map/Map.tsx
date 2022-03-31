import React, { Dispatch, SetStateAction, useState } from "react";
import GoogleMapReact, { ClickEventValue, Coords } from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import { PlaceType, WeatherType } from "../../features/types";
import useStyles from "./styles";

interface MapProps {
  setCoordinates: (coord: GoogleMapReact.Coords) => void;
  setBounds: (bounds: {
    ne: GoogleMapReact.Coords;
    sw: GoogleMapReact.Coords;
  }) => void;
  coordinates: GoogleMapReact.Coords;
  places: Array<PlaceType>;
  setChildClicked: (childClicked: string) => void;
  weatherData: Array<WeatherType>;
}

const Map: React.FC<MapProps> = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={16}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, index) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              height={80}
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
