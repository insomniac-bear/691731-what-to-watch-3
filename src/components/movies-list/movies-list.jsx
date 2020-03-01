import React from 'react';
import PropTypes from 'prop-types';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withVideoPreview from '../../hocs/with-video-preview/with-video-preview.js';

const SmallMovieCardWrapped = withVideoPreview(SmallMovieCard);

const MoviesList = (props) => {
  const {cardClickHandler, films} = props;

  return (
    <div className="catalog__movies-list">
      {films.map(
          (filmData) => <SmallMovieCardWrapped
            key={filmData.id}
            filmData={filmData}
            onCardClickHandler={cardClickHandler}
          />)
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  })).isRequired,
  cardClickHandler: PropTypes.func.isRequired,
};

export default MoviesList;
