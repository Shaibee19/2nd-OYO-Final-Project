import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

function MovieSearches() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("s");

  // BY TITLE
  async function searchMovies(searchInput) {
    try {
      const { data } = await axios.get(
        `${baseURL}?s=${searchInput}&apikey=${apiKey}`
      );
      setMovies(data);
    } catch (err) {
      console.error("Error fetching movies:", err);
      <p>
        An error occurred while rounding up those mooviez. Please try again
        later.
      </p>;
      return;
    }
  }

  function renderMovies() {
    return movies.map((movie) => (
      <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
        <Movie poster={movie.Poster} title={movie.Title} year={movie.Year} />
      </Link>
    ));
  }

  function renderSkeleton() {
    <>
      <p className="loading">🍿 Loading movies...</p>
      <div className="movie__img--skeleton"></div>
      <div className="skeleton movie__title--skeleton"></div>
      <div className="skeleton movie__year--skeleton"></div>
      <div className="skeleton movie__description--skeleton"></div>
    </>;
    return;
  }

  // SORT BUTTON
  function filterMovies(filter) {
    if (filter === "NEWEST") {
      setMovies(
        movies.slice().sort((a, b) => parseInt(b.Year) - parseInt(a.Year))
      );
    } else if (filter === "OLDEST") {
      setMovies(
        movies.slice().sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
      );
    } else if (filter === "DESCENDING") {
      setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)));
    } else if (filter === "ASCENDING") {
      setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)));
    }
  }

  useEffect(() => {
    if (searchInput) {
      searchMovies(searchInput).then((results) => {
        setMovies(results.slice(0, 8));
      });
    }
  }, [searchInput]);

  return (
    <>
      <section id="results">
        <div className="container">
          <div className="row results__row">
            <h2 className="results__title">Search Results:</h2>
            <span
              className="searchName"
              //   for {searchInput} style="color: #f8f8f8; opacity: 0.5"
            ></span>
            <h3 className="results__subtitle">
              Options:
              <select
                id="movieSort"
                defaultValue="DEFAULT"
                onChange={(e) => filterMovies(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="ASCENDING">Title: A-Z</option>
                <option value="DESCENDING">Title: Z-A</option>
                <option value="NEWEST">Year: Newest to Oldest</option>
                <option value="OLDEST">Year: Oldest to Newest</option>
              </select>
            </h3>
          </div>
          {movies.length ? renderMovies() : renderSkeleton()}
        </div>
      </section>
    </>
  );
}

export default MovieSearches;
