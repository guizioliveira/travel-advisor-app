import axios from "axios";
import googleMapReact from "google-map-react";

export const getPlacesData = async (
  type: string,
  sw: googleMapReact.Coords,
  ne: googleMapReact.Coords
) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat: Number, lng: Number) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
