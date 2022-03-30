import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { PlaceType } from "../../features/types";
import useStyles from "./styles";
import googleMapReact from "google-map-react";
import { SignalCellularNull } from "@material-ui/icons";

interface ListProps {
  places: Array<PlaceType>;
  childClicked: string;
  isLoading: Boolean;
}

const List: React.FC<ListProps> = ({ ...props }) => {
  const classes = useStyles();
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [elementRefs, setElementeRefs] = useState([]);

  useEffect(() => {
    const refs = Array(props.places?.length)
      .fill(null)
      .map((_, i) => elementRefs[i] || createRef());

    setElementeRefs(refs);
  }, [props.places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {props.isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as string)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value as string)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3 stars</MenuItem>
              <MenuItem value={4}>Above 4 stars</MenuItem>
              <MenuItem value={4.5}>Above 4.5 stars</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {props.places?.map((place, index) => (
              <Grid ref={elementRefs[index]} item key={index} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(props.childClicked) === index}
                  refProp={elementRefs[index]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
