import { Navigate } from "react-router-dom";


function Movie({ movie }) {
  return (
    <>
      <div className="movie-list">
              <div className="movie">
                <div
                  class="movie-card"
                  onClick={() => Navigate(`/movies/${movie.imdbID}`)}
                >
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
    </>
  )
};

export default Movie;
