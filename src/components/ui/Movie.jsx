import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { imdbID } = useParams();
  
  // CALLING THE API
  useEffect(() => {
    const apiKey = "4ea1d0b9";

    async function fetchMovies() {
      // try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
        );
        console.log(data);
      // } catch (err) {
      //   console.error("Error fetching movies:", err);
      //   // movieListEl.innerHTML =
      //   //   "<p>An error occurred while rounding up those mooviez. Please try again later.</p>";
      // }
    }

    fetchMovies("lion");
  }, []);



  return (
    <>
    {/* {loading
            ? new Array(10)
                .fill(0)
                .map((_) => (
                  <p className="loading">🍿 Loading movies...</p>
                ))
            : movies.map((movie) => (
                <div className="movie-list">
                  <div className="movie">
                    <div class="movie-card" onClick={() => navigate("/{movie}")}>
                      <div class="movie-card__container">
                        <img src={movie.Poster} alt="" />
                        <div class="movie-card__info">
                          <h4>{movie.Title}</h4>
                          <p>
                            <b>Year:</b> {movie.Year}
                          </p>
                          <p>Click the card for more details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
    </>
  )
};

export default Movie;
