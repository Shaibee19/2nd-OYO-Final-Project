const Rating = ({ imdbRating, Ratings.Source.RottenTomatoes.Value }) => {
  return (
    <div className="movie__rating">
        {Ratings.Source.RottenTomatoes.Value ? (
          <>
              {imdbRating}
            {Ratings.Source.RottenTomatoes.Value}
          </>
        ) : (
          <>{imdbRating}</>
        )}
      </div>
  )
};

export default Rating;