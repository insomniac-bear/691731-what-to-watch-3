import React from 'react';
import PropTypes from 'prop-types';

const defineTextRating = (rating) => {
  if (rating >= 0 && rating < 3) {
    return `Bad`;
  } else if (rating >= 3 && rating < 5) {
    return `Normal`;
  } else if (rating >= 5 && rating < 8) {
    return `Good`;
  } else if (rating >= 8 && rating < 10) {
    return `Very good`;
  } else {
    return `Avesome`;
  }
};

const Overview = (props) => {
  const {filmData} = props;

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{filmData.rating}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{defineTextRating(filmData.rating)}</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{filmData.describe}</p>
      <p className="movie-card__director"><strong>Director: {filmData.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {filmData.actors}</strong></p>
    </div>
  </React.Fragment>;
};

Overview.propTypes = {
  filmData: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    describe: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.string.isRequired,
  }).isRequired,
};

export default Overview;
