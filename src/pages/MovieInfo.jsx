import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import Description from "../components/ui/Description";
import BoxOffice from "../components/ui/BoxOffice";
import Rating from "../components/ui/Rating";

function MovieInfo() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  // BY IMDB
  async function fetchMovieByIMDB() {
    const { data } = await axios.get(
      `${baseURL}?i=${movie.imdbID}&apikey=${apiKey}`
    );
    setMovie(data);
  }

  useEffect(() => {
    fetchMovieByIMDB(imdbID);
  }, []);

  return (
    <>
      <Movie />
      <Description />
      <BoxOffice />
      <Rating />
    </>
  );
}
export default MovieInfo;
