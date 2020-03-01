import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';


const Main = (props) => {
  const {
    promoFilmData,
    films,
    selectedGenere,
    cardClickHandler,
    onChangeGenere
  } = props;

  return <React.Fragment>
    <MovieCard promoFilmData={promoFilmData}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList
          films={films}
          activeGenere={selectedGenere}
          onChangeGenere={onChangeGenere}
        />
        <MoviesList
          films={films}
          cardClickHandler={cardClickHandler}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  promoFilmData: PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    genere: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  })).isRequired,
  selectedGenere: PropTypes.string.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
  onChangeGenere: PropTypes.func.isRequired,
};

export default Main;
