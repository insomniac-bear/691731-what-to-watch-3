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
      selectedGenere: `All genres`,
    };

    this.updateFilmId = this.updateFilmId.bind(this);
    this.changeGenere = this.changeGenere.bind(this);
  }

  updateFilmId(id) {
    const {films} = this.props;
    this.setState({filmId: id});
    this.setState({selectedGenere: films[id].genere});
  }

  changeGenere(genere) {
    this.setState({selectedGenere: genere});
  }


  _sortFilmOfGenere(activeGenere) {
    const {films} = this.props;
    return (activeGenere !== `All genres`) ? films.filter((film) => film.genere === activeGenere).slice(0, 4) : films;
  }

  _renderMain() {
    const {promoFilmData, films} = this.props;
    const filmId = this.state.filmId;
    const currentFilmsList = this._sortFilmOfGenere(this.state.selectedGenere);

    if (filmId < 0) {
      return (
        <Main
          promoFilmData={promoFilmData}
          films={currentFilmsList}
          selectedGenere={this.state.selectedGenere}
          cardClickHandler={this.updateFilmId}
          onChangeGenere={this.changeGenere}
        />
      );
    } else {
      return (
        <MoviePage
          filmData={films[filmId]}
          films={currentFilmsList}
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
    genere: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.isRequired,
    filmName: PropTypes.string,
    posterUrl: PropTypes.string,
    filmPreview: PropTypes.string,
    genere: PropTypes.string,
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
