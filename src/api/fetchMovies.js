import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

// const QUERIES = "language=en-US&page=1&sort_by=popularity.desc&with_genres=28";

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

const fetchMoviesByGenre = async (genreId) => {
  try {
    const { data } = await axios.get(BASE_URL, 
    {
      params: {
        api_key: API_KEY,
        language: "en-Us",
        page: 1,
        sort_by: "popularity.desc",
        with_genres: genreId,
      },
    });

    return data;
  } catch (error) {
    console.log("Failed to fetch movies by genre: ",error);
  }
};


export default fetchMoviesByGenre;