import React from 'react';
import PropTypes from 'prop-types';

import VideoPreview from '../video-preview/video-preview.jsx';

const SmallMovieCard = (props) => {
  const {filmData, onHoverHandler, onMouseOut, onCardClickHandler, hoveredElement} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHoverHandler(filmData)}
      onMouseLeave={() => onMouseOut()}
      onClick={() => onCardClickHandler(filmData.id)}
    >
      <div className="small-movie-card__image">
        <VideoPreview
          isPlaying={hoveredElement === filmData}
          filmPreview={filmData.filmPreview}
          posterUrl={filmData.posterUrl} />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            onCardClickHandler(filmData.id);
          }}
        >
          {filmData.filmName}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    filmPreview: PropTypes.string.isRequired,
  }).isRequired,
  onHoverHandler: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onCardClickHandler: PropTypes.func.isRequired,
  hoveredElement: PropTypes.shape(),
};

export default SmallMovieCard;
