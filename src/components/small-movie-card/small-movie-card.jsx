import React from 'react';
import PropTypes from 'prop-types';
import {ActivePage} from '../../reducer/genre/genre.js';

const SmallMovieCard = (props) => {
  const {
    filmData,
    onHover,
    onMouseOut,
    renderVideoPreview,
    loadComments,
    updateFilmId,
    activePageHandle,
  } = props;

  const onCardClick = (evt) => {
    evt.preventDefault();
    loadComments(filmData.id);
    updateFilmId(filmData.id);
    activePageHandle(ActivePage.FILM_PAGE);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onMouseOut()}
      onClick={onCardClick}
    >
      {renderVideoPreview(filmData.filmPreview, filmData.previewImage)}
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={onCardClick}
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
    previewImage: PropTypes.string.isRequired,
    filmPreview: PropTypes.string.isRequired,
  }).isRequired,
  loadComments: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  renderVideoPreview: PropTypes.func.isRequired,
  updateFilmId: PropTypes.func.isRequired,
  activePageHandle: PropTypes.func.isRequired,
};

export default SmallMovieCard;
