import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSearches from "./pages/MovieSearches";
import MovieInfo from "./pages/MovieInfo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  // DISPLAYING MOVIES
  const apiKey = "4ea1d0b9";
  const [movies, setMovies] = useState([]);
  

  async function fetchMovies() {
    // try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&`
    );
    // } catch (err) {
    //   console.error("Error fetching movies:", err);
    //   // movieListEl.innerHTML =
    //   //   "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
    // }
  }

  useEffect(() => {
    fetchMovies("lion");
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/moviesearches"
            exact
            render={() => <MovieSearches movies={movies} />}
          ></Route>
          <Route
            path="/movies/:imdbID"
            exact
            render={() => <MovieInfo movies={movies} />}
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
