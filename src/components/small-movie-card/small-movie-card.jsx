import React from 'react';
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {
    filmData,
    onHover,
    onMouseOut,
    renderVideoPreview,
    loadComments,
    updateFilmId,
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onMouseOut()}
      onClick={() => {
        loadComments(filmData.id);
        updateFilmId(filmData.id);
      }}
    >
      {renderVideoPreview(filmData.filmPreview, filmData.previewImage)}
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html"
          onClick={(evt) => {
            evt.preventDefault();
            loadComments(filmData.id);
            updateFilmId(filmData.id);
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
    previewImage: PropTypes.string.isRequired,
    filmPreview: PropTypes.string.isRequired,
  }).isRequired,
  loadComments: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  renderVideoPreview: PropTypes.func.isRequired,
  updateFilmId: PropTypes.func.isRequired,
};

export default SmallMovieCard;
