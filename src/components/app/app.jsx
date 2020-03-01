import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmId: -1,
      selectedGenre: `All genres`,
    };

    this.updateFilmId = this.updateFilmId.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
  }

  updateFilmId(id) {
    const {films} = this.props;
    this.setState({filmId: id});
    this.setState({selectedGenre: films[id].genre});
  }

  changeGenre(genre) {
    this.setState({selectedGenre: genre});
  }


  _sortFilmOfGenre(activeGenre) {
    const {films} = this.props;
    return (activeGenre !== `All genres`) ? films.filter((film) => film.genre === activeGenre).slice(0, 4) : films;
  }

  _renderMain() {
    const {
      promoFilmData,
      currentFilms,
      filmId,
      updateFilmId,
      changeGenre
    } = this.props;
    // const filmId = this.state.filmId;
    const currentFilmsList = this._sortFilmOfGenre(this.state.selectedGenre);

    if (filmId < 0) {
      return (
        <Main
          promoFilmData={promoFilmData}
          films={currentFilmsList}
          selectedGenre={this.state.selectedGenre}
          cardClickHandler={this.updateFilmId}
          onChangeGenre={this.changeGenre}
        />
      );
    } else {
      return (
        <MoviePage
          filmData={currentFilms[filmId]}
          films={currentFilms}
          cardClickHandler={this.updateFilmId}
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
  films: PropTypes.arrayOf(PropTypes.shape({
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
};

export default App;
