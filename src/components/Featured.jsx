import Movie from "./ui/Movie";

const Featured = () => {
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
                .filter((movie) => movie.rating === 5)
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
