import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/genre/genre.js';
import {getFilmId, getShowedFilmsCount} from '../../reducer/genre/selectors.js';
import {getFilmsByGenre} from '../../reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import AuthPage from '../auth-page/auth-page.jsx';

class App extends PureComponent {
  _renderMain() {
    const {
      currentFilms,
      filmId,
      showedFilmsCount,
      onChangeShowedFilmsCount,
    } = this.props;

    if (filmId < 0) {
      return (
        <Main
          films={currentFilms.slice(0, showedFilmsCount)}
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
          <Route exact path="/dev-auth">
            <AuthPage
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
  showedFilmsCount: PropTypes.number.isRequired,
  onChangeShowedFilmsCount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilms: getFilmsByGenre(state),
  filmId: getFilmId(state),
  showedFilmsCount: getShowedFilmsCount(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeShowedFilmsCount() {
    dispatch(ActionCreator.onChangeShowedFilmsCount());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
