# Travel Advisor app

<img align="right" width="500" src="https://user-images.githubusercontent.com/21250477/161406073-cfecdbb4-7ff2-4cfb-844c-2bf5a47c1509.png"/>

## Introduction
Travel Advisor app is a Travel Companion Application using Google Maps. With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs, data filtering and much more.

If you liked this project, please give me a :star:!
<br clear="right">

## Setup
- Run `yarn install` to install all dependencies;
- Run `yarn dev` to start the development server

## APIs
In this project the following APIs was used:

- **Google Maps API**
  - [Maps JavaScript API](https://console.cloud.google.com/marketplace/product/google/maps-backend.googleapis.com)
  - [Places API](https://console.cloud.google.com/marketplace/product/google/places-backend.googleapis.com)
- **RapidAPI**
  - [Travel Advisor](https://rapidapi.com/apidojo/api/travel-advisor)
  - [Open Weather Map](https://rapidapi.com/community/api/open-weather-map)

## Setting environment variables
This project is using environment variables for the APIs' keys. To make it works properly, you need to create a `.env` file on project root and add your own keys for all APIs listed before. The structure of the file will be like this:

```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_RAPIDAPI_API_KEY=your_rapidapi_key
```
