import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  _renderMain() {
    const {
      promoFilmData,
      currentFilms,
      filmId,
      selectedGenre,
      updateFilmId,
      onChangeGenre,
    } = this.props;

    if (filmId < 0) {
      return (
        <Main
          promoFilmData={promoFilmData}
          films={currentFilms}
          selectedGenre={selectedGenre}
          cardClickHandler={updateFilmId}
          onChangeGenre={onChangeGenre}
        />
      );
    } else {
      return (
        <MoviePage
          filmData={currentFilms[filmId]}
          films={currentFilms}
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
  promoFilmData: PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
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
    actors: PropTypes.string,
    comments: PropTypes.array,
  })).isRequired,
  filmId: PropTypes.number.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  updateFilmId: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  selectedGenre: state.selectedGenre,
  currentFilms: state.currentFilms,
  filmId: state.filmId,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilmId(id) {
    dispatch(ActionCreator.updateFilmId(id));
  },
  onChangeGenre(genre) {
    dispatch(ActionCreator.onChangeGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
