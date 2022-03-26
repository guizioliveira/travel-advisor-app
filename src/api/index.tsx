import axios from 'axios';

const API_URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(API_URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '8dcf80e989msh64b389bf4344177p1fa947jsnd97b9a3666ce'
          }
        });

        return data;
    }
    catch (error) {
        console.log(error);
    }
}