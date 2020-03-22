import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator, ActivePage} from '../../reducer/genre/genre.js';
import {getFilmId, getShowedFilmsCount, getActivePage} from '../../reducer/genre/selectors.js';
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
      activePage,
      activePageHandle,
    } = this.props;

    if (activePage === ActivePage.AUTH_PAGE) {
      return (
        <AuthPage
          activePageHandle={activePageHandle}
        />
      );
    } else if (activePage === ActivePage.MAIN) {
      return (
        <Main
          films={currentFilms.slice(0, showedFilmsCount)}
          showedFilmsCount={showedFilmsCount}
          currentFilmsCount={currentFilms.length}
          onChangeShowedFilmsCount={onChangeShowedFilmsCount}
          activePageHandle={activePageHandle}
        />
      );
    }

    return (
      <MoviePage
        filmData={currentFilms.find((film) => film.id === filmId)}
        films={currentFilms.slice(0, showedFilmsCount)}
        activePageHandle={activePageHandle}
      />
    );
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
  activePage: PropTypes.string.isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
  onChangeShowedFilmsCount: PropTypes.func.isRequired,
  activePageHandle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentFilms: getFilmsByGenre(state),
  filmId: getFilmId(state),
  showedFilmsCount: getShowedFilmsCount(state),
  authorizationStatus: getAuthorizationStatus(state),
  activePage: getActivePage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeShowedFilmsCount() {
    dispatch(ActionCreator.onChangeShowedFilmsCount());
  },
  activePageHandle(activePage) {
    dispatch(ActionCreator.activePageHandle(activePage));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
