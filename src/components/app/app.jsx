import React, {PureComponent} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filmId: -1
    };

    this.updateFilmId = this.updateFilmId.bind(this);
  }

  updateFilmId(id) {
    this.setState({filmId: id});
  }

  _renderMain() {
    const {promoFilmData, films} = this.props;
    const filmId = this.state.filmId;

    if (filmId < 0) {
      return (
        <Main
          promoFilmData={promoFilmData}
          films={films}
          cardClickHandler={this.updateFilmId}
        />
      );
    } else {
      return (
        <MoviePage
          filmData={films[filmId]}
          films={films}
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
