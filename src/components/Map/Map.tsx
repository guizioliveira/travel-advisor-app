import React, { SetStateAction, useState } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import { Place } from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

interface MapProps {
    setCoordinates: (coord: GoogleMapReact.Coords) => void;
    setBounds: (bounds: {ne: GoogleMapReact.Coords; sw: GoogleMapReact.Coords}) => void;
    coordinates: GoogleMapReact.Coords;
    places: Array<Place>;
}

const Map: React.FC<MapProps> = ({
    setCoordinates,
    setBounds,
    coordinates,
    places
}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys= {{ key: 'AIzaSyBughnEkxh3ppTv7iACjbIokWJB1Y3e8cg' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne,  sw: e.marginBounds.sw });
                }}
            >
                {places?.map((place, index) =>(
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={index}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size="small" value={Number(place.rating)} readOnly/>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;