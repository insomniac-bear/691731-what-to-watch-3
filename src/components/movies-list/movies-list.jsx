import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getFilmsByGenre} from '../../reducer/data/selectors.js';
import {getShowedFilmsCount} from '../../reducer/genre/selectors.js';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import {ActionCreator} from '../../reducer/genre/genre.js';


import SmallMovieCard from '../small-movie-card/small-movie-card.jsx';
import withActiveVideo from '../../hocs/with-active-video/with-active-video.js';

const SmallMovieCardWrapped = withActiveVideo(SmallMovieCard);

const MoviesList = (props) => {
  const {
    currentFilms,
    showedFilmsCount,
    loadComments,
    updateFilmId,
  } = props;

  return (
    <div className="catalog__movies-list">
      {currentFilms.slice(0, showedFilmsCount).map(
          (filmData) => <SmallMovieCardWrapped
            key={filmData.id}
            filmData={filmData}
            loadComments={loadComments}
            updateFilmId={updateFilmId}
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
  loadComments: PropTypes.func.isRequired,
  updateFilmId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilms: getFilmsByGenre(state),
  showedFilmsCount: getShowedFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateFilmId(id) {
    dispatch(ActionCreator.updateFilmId(id));
  },

  loadComments(id) {
    dispatch(DataOperation.loadComments(id));
  },
});


export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
