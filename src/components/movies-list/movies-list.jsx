import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hoveredElement: {},
    };
    this._onSmallCardHover = this._onSmallCardHover.bind(this);
    this._onSmallCardMouseOut = this._onSmallCardMouseOut.bind(this);
  }

  _onSmallCardHover(hoveredSmallFilmCard) {
    this.timerId = setTimeout(() => {
      this.setState({hoveredElement: hoveredSmallFilmCard});
    }, 1000);
  }

  _onSmallCardMouseOut() {
    clearTimeout(this.timerId);
    this.setState({hoveredElement: {}});
  }

  render() {
    const {films, cardClickHandler} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map(
            (filmData) => <SmallMovieCard
              key={filmData.id}
              filmData={filmData}
              onHoverHandler={this._onSmallCardHover}
              onMouseOut={this._onSmallCardMouseOut}
              onCardClickHandler={cardClickHandler}
              hoveredElement={this.state.hoveredElement}
            />)
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  })).isRequired,
  cardClickHandler: PropTypes.func.isRequired,
};

export default MoviesList;
