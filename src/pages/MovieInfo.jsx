import Movie from "../components/ui/Movie";
import Rating from "../components/ui/Rating";
import Description from "../components/ui/Description";
import BoxOffice from "../components/ui/BoxOffice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function MovieInfo({ fetchMovieByIMDB }) {
  const { imdbID } = useParams();
  const[movie, setMovie] = useState(null);
//   const movie = movies.find(movie => +movie.imdbID === +imdbID);

  useEffect(() => {
    fetchMovieByIMDB(imdbID).then(setMovie);
  }, [imdbID]);

  return (
    <>
      <Movie movie={movie} />
      {/* <Rating imdbRating={movies.imdbRating} rotTomRating={movies.Ratings.Source.RottenTomatoes.Value} /> */}
      <Description />
      <BoxOffice />
    </>
  );
}

export default MovieInfo;
