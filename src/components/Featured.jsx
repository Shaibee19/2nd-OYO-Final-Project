import { useState } from "react";
import Movie from "./ui/Movie";
import axios from "axios";

const Featured = ({ movies }) => {
  const apiKey = "4ea1d0b9";
  const [movies, setMovies] = useState([]);

  // DISPLAYING MOVIES
  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&`
    );
    setMovies(data);
  }

  return (
    <>
      <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Featured <span className="purple">Movies</span>
            </h2>
            <div className="movies">
              {movies
                .random()
                .slice(0, 4)
                .map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
