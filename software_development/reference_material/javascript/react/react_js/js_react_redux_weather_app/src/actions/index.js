import axios from 'axios';

const API_KEY = '8e83939a9aec769fb58767630febe892';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},nl`;
  const REQUEST = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: REQUEST
  };
}
