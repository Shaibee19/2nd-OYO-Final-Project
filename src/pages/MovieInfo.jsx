import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Description from "../components/ui/Description";
import BoxOffice from "../components/ui/BoxOffice";
import Rating from "../components/ui/Rating";

function MovieInfo() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";
  const { imdbID } = useParams();
  const [detailedMovie, setDetailedMovie] = useState([]);

  // BY IMDB
  async function fetchMovieByIMDB({ imdbID }) {
    const { data } = await axios.get(
      `${baseURL}?i=${imdbID}&apikey=${apiKey}`
    );
    setDetailedMovie(data);
  }

  function renderMovie() {
    return detailedMovie.map((movie) => (
      <>
        <Description movie={movie} />
        <BoxOffice />
        <Rating />
      </>
    ));
  }

  useEffect(() => {
    fetchMovieByIMDB(imdbID);
  }, []);

  return (
    <>
      <div className="movie__container">
        {detailedMovie.length ? (
          renderMovie()
        ) : (
          <>
            <p className="loading">🍿 Loading movie...</p>
            {/* <div className="movie__img--skeleton"></div>
                <div className="skeleton movie__title--skeleton"></div>
                <div className="skeleton movie__year--skeleton"></div>
                <div className="skeleton movie__description--skeleton"></div> */}
          </>
        )}
      </div>
    </>
  );
}
export default MovieInfo;
