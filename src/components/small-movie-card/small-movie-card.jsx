import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {
    filmData,
    onHoverHandler,
    onCardClickHandler,
    renderVideoPreview
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHoverHandler()}
      onMouseLeave={() => onHoverHandler()}
      onClick={() => onCardClickHandler(filmData.id)}
    >
      <div className="small-movie-card__image">
        {renderVideoPreview(filmData.filmPreview, filmData.posterUrl)}
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
  onCardClickHandler: PropTypes.func.isRequired,
  renderVideoPreview: PropTypes.func.isRequired,
};

export default SmallMovieCard;
