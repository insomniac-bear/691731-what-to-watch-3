import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmData, onHoverHandler, onCardClickHandler} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() => onHoverHandler(filmData)}
        onClick={() => onCardClickHandler(filmData.id)}
      >
        <div className="small-movie-card__image">
          <img src={filmData.posterUrl} alt={filmData.filmName} width="280" height="175" />
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
  }).isRequired,
  onHoverHandler: PropTypes.func.isRequired,
  onCardClickHandler: PropTypes.func.isRequired,
};

export default SmallMovieCard;
