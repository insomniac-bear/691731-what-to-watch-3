import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    const {filmData, onHoverHandler} = this.props;
    onHoverHandler(filmData);
  }

  render() {
    const {filmData} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.onHover}
      >
        <div className="small-movie-card__image">
          <img src={filmData.posterUrl} alt={filmData.filmName} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">
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
};

export default SmallMovieCard;
