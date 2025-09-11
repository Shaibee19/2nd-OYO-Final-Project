import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/ui/SearchBar";

function MovieSearches() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";

  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  
  // BY TITLE
  async function searchMovies(query) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${baseURL}?s=${query}&apikey=${apiKey}`
      );
      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovies(data.Search.slice(0, 10) || [].slice(0, 10)); // OMDB returns { Search: [...] }
      }
    } catch (err) {
      setError("Failed to fetch movies")
      console.error("Error fetching movies:", err);
      <p> An error occurred while rounding up those mooviez. Please try again later.</p>;
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      searchMovies(searchInput);
    }
  }

  function renderMovies() {
    return movies.map((movie) => (
      <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
        <Movie movie={movie} />
      </Link>
    ));
  }

  // SORT BUTTON
  function filterMovies(filter) {
    if (!movies.length) return;

    let sorted = [...movies];
    if (filter === "NEWEST")
      sorted.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    if (filter === "OLDEST")
      sorted.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    if (filter === "ASCENDING")
      sorted.sort((a, b) => a.Title.localeCompare(b.Title));
    if (filter === "DESCENDING")
      sorted.sort((a, b) => b.Title.localeCompare(a.Title));
    setMovies(sorted);
  }

  useEffect(() => {renderMovies();}, [q]);

  return (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <section id="results">
        <div className="container">
          <div className="row results__row">
            <h2 className="results__title">Search Results:</h2>
            <h3 className="results__subtitle">
              Options:
              <select
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
          <div className="movie__container">
            {loading ? (
              <p className="loading">🍿 Loading movies...</p>
            ) : error ? (
              <p className="error">Error: {error}</p>
            ) : movies.length ? (
              renderMovies()
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default MovieSearches;


