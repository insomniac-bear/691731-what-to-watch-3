import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmData} = this.props;
    return <React.Component>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item  movie-nav__item--active">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        <div className="movie-rating">
          <div className="movie-rating__score">{filmData.rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">Very good</span>
            <span className="movie-rating__count">240 ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{filmData.describe}</p>
          <p className="movie-card__director"><strong>Director: {filmData.director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {filmData.actors}</strong></p>
        </div>
      </div>
    </React.Component>;
  }
}

Tabs.propTypes = {
  filmData: PropTypes.shape().isRequired,
};

export default Tabs;
