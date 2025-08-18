import { useEffect, useState } from "react";
import Movie from "../components/ui/Movie";
import { useSearchParams } from "react-router-dom";

function MovieSearches() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const searchInput = searchParams.get("s");

  useEffect(() => {
    if (searchInput) {
      searchMovies(searchInput).then((results) => {
        setMovies(results.slice(0, 8));
      });
    }
  }, [searchInput]);

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
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MovieSearches;

// ****** wish list ****** show <Fetured /> when nothing has been Searched yet
