import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKAN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2YxMGMzY2E2ZTBmNDUzMDE4MzQ0YmJlMWNjMjUwZiIsInN1YiI6IjY0Y2IzOTVjMjk3MzM4MDIwYjAzZjAzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pc8hZLij0zfVWOQefH6z9kxGq5ShleDMxt7pQR6rUq4";

const headers = {
  Authorization: "Bearer " + TMDB_TOKAN,
};

export const fetchdataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params }); // this is use to fetching data from server 
    
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
