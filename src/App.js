import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import MovieSearches from "./pages/MovieSearches";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const baseURL = "https://www.omdbapi.com/";
  const { imdbID } = useParams();


  // BY TITLE
  async function searchMovies(searchInput) {
    try {
      const { data } = await axios.get(
        `${baseURL}?s=${searchInput}&apikey=${apiKey}`
      );
      return data.Search || [];
    } catch (err) {
      console.error("Error fetching movies:", err);
      // movieListEl.innerHTML =
      //   "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
      return [];
    }
  }

  // BY IMDB
  async function fetchMoviesByIMDB(imdbID) {
    try {
      const { data } = await axios.get(
        `${baseURL}?i=${movie.imdbID}&apikey=${apiKey}`
      );
      return data || null;
    } catch (err) {
      console.error("Error fetching movies:", err);
      // movieListEl.innerHTML =
      //   "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
      return null;
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/search/${searchInput}"
            exact
            render={() => <MovieSearches searchInput={searchInput} />}
          ></Route>
          <Route
            path="/movie/${movie.imdbID}"
            exact
            render={() => <MovieInfo fetchMoviesByIMDB={fetchMoviesByIMDB} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
