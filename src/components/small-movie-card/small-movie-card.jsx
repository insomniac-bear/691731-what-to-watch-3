import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPreview from '../vide-preview/video-preview.jsx';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmData, onHoverHandler, onMouseOut, onCardClickHandler, hoveredElement} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => onHoverHandler(filmData.id)}
        onMouseLeave={() => onMouseOut()}
        onClick={() => onCardClickHandler(filmData.id)}
      >
        <div className="small-movie-card__image">
          {filmData.id === hoveredElement ? <VideoPreview filmPreview={filmData.filmPreview} posterUrl={filmData.posterUrl}></VideoPreview> : <img src={filmData.posterUrl} alt={filmData.filmName} width="280" height="175" />}
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
  }
}

SmallMovieCard.propTypes = {
  filmData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    filmPreview: PropTypes.string.isRequired,
  }).isRequired,
  onHoverHandler: PropTypes.func.isRequired,
  onCardClickHandler: PropTypes.func.isRequired,
  hoveredElement: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]),
};

export default SmallMovieCard;
