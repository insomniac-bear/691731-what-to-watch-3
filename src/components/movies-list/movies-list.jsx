import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeElement: {}};
    this.onSmallCardHover = this.onSmallCardHover.bind(this);
  }

  onSmallCardHover(activeSmallFilmCard) {
    this.setState({activeElement: activeSmallFilmCard});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map(
            (filmData) => <SmallMovieCard key={filmData.id} filmData={filmData} onHoverHandler={this.onSmallCardHover}/>)
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
};

export default MoviesList;
