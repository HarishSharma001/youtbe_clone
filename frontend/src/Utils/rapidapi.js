
import axios from "axios";

const API_KEY = 291da0c06amsh2780702567e8f60p12f89cjsnb3a8d50d4054;
const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("error fetching api data: ", error);
    throw error;
  }
}
