import Movie from "../components/ui/Movie";
import Rating from "../components/ui/Rating";
import Description from "../components/ui/Description";
import BoxOffice from "../components/ui/BoxOffice";
import { useParams } from "react-router-dom";


function MovieInfo({ movies }) {
  const { imdbID } = useParams();
  const movie = movies.find(movie => +movie.imdbID === +imdbID);

  return (
    <>
      <Movie />
      <Rating imdbRating={movies.imdbRating} rotTomRating={movies.Ratings.Source.RottenTomatoes.Value} />
      <Description />
      <BoxOffice />
    </>
  );
}

export default MovieInfo;
