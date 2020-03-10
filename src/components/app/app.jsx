import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/genre/genre.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getSelectedGenre, getFilmId, getShowedFilmsCount} from '../../reducer/genre/selectors.js';
import {getAllFilms, getFilmsByGenre, getPromoFilm, getCommentsToFilm} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation} from '../../reducer/user/user.js';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  _renderMain() {
    const {
      promoFilmData,
      allFilms,
      currentFilms,
      filmId,
      selectedGenre,
      updateFilmId,
      onChangeGenre,
      showedFilmsCount,
      onChangeShowedFilmsCount,
      commentsList,
    } = this.props;

    if (filmId < 0) {
      return (
        <Main
          promoFilmData={promoFilmData}
          allFilms={allFilms}
          films={currentFilms.slice(0, showedFilmsCount)}
          selectedGenre={selectedGenre}
          cardClickHandler={updateFilmId}
          onChangeGenre={onChangeGenre}
          showedFilmsCount={showedFilmsCount}
          currentFilmsCount={currentFilms.length}
          onChangeShowedFilmsCount={onChangeShowedFilmsCount}
        />
      );
    } else {
      return (
        <MoviePage
          filmData={currentFilms.find((film) => film.id === filmId)}
          films={currentFilms.slice(0, showedFilmsCount)}
          cardClickHandler={updateFilmId}
        />
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-movie-page">
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoFilmData: PropTypes.shape().isRequired,
  currentFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.isRequired,
    filmName: PropTypes.string,
    posterUrl: PropTypes.string,
    filmPreview: PropTypes.string,
    genre: PropTypes.string,
    release: PropTypes.number,
    runtime: PropTypes.number,
    rating: PropTypes.number,
    describe: PropTypes.string,
    director: PropTypes.string,
    actors: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  filmId: PropTypes.number.isRequired,
  allFilms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  updateFilmId: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  onChangeShowedFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedGenre: getSelectedGenre(state),
  allFilms: getAllFilms(state),
  promoFilmData: getPromoFilm(state),
  currentFilms: getFilmsByGenre(state),
  filmId: getFilmId(state),
  showedFilmsCount: getShowedFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateFilmId(id) {
    dispatch(ActionCreator.updateFilmId(id));
  },
  onChangeGenre(genre) {
    dispatch(ActionCreator.onChangeGenre(genre));
  },
  onChangeShowedFilmsCount() {
    dispatch(ActionCreator.onChangeShowedFilmsCount());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
