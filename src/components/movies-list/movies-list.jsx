import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getFilmsByGenre} from '../../reducer/data/selectors.js';
import {getShowedFilmsCount} from '../../reducer/genre/selectors.js';

import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveVideo from '../../hocs/with-active-video/with-active-video.js';

const SmallMovieCardWrapped = withActiveVideo(SmallMovieCard);

const MoviesList = (props) => {
  const {
    currentFilms,
    showedFilmsCount,
  } = props;

  const films = currentFilms.slice(0, showedFilmsCount);

  return (
    <div className="catalog__movies-list">
      {films.map(
          (filmData) => <SmallMovieCardWrapped
            key={filmData.id}
            filmData={filmData}
          />)
      }
    </div>
  );
};

MoviesList.propTypes = {
  currentFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
  })).isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilms: getFilmsByGenre(state),
  showedFilmsCount: getShowedFilmsCount(state),
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
