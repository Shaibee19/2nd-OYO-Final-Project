function Description ({ movie }) {
  return (
    <>
      <div className="movie">
        <div className="movie-card">
          <div className="movie-card__container">
            <img src={movie.Poster} alt="" />
            <div className="movie-card__info">
              <h4>{movie.Title}</h4>
              <p>
                <b>Runtime:</b> {movie.Runtime}
                <b>Released:</b> {movie.Released}
                <b>Ratings:</b> {movie.Ratings}
                <b>Genre:</b> {movie.Genre}
                <b>Awards:</b> {movie.Awards}
                <b>BoxOffice:</b> {movie.BoxOffice}
                <b>Plot:</b> {movie.Plot}
                <b>Actors:</b> {movie.Actors}
                <b>Writers:</b> {movie.Writers}
                <b>Directors:</b> {movie.Directors}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
