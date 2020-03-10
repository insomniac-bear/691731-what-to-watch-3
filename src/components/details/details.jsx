import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {filmData} = props;

  return <React.Fragment>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{filmData.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {filmData.actors.map((actor) => {
              return actor;
            })}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{Math.floor(filmData.runtime / 60)}h {filmData.runtime % 60}m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{filmData.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{filmData.release}</span>
        </p>
      </div>
    </div>
  </React.Fragment>;
};

Details.propTypes = {
  filmData: PropTypes.shape({
    actors: PropTypes.arrayOf(PropTypes.string),
    director: PropTypes.string,
    runtime: PropTypes.number,
    genre: PropTypes.string,
    release: PropTypes.number,
  }).isRequired,
};

export default Details;
