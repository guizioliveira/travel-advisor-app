import axios from "axios";
import googleMapReact from "google-map-react";

const API_URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (
  sw: googleMapReact.Coords,
  ne: googleMapReact.Coords
) => {
  try {
    const {
      data: { data },
    } = await axios.get(API_URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "d782754ee0mshdebc4c5e2a168fap162ddfjsnc12a5e97653c",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
