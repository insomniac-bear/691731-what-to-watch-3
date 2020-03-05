import React from 'react';
import PropTypes from 'prop-types';

import CatalogMoreButton from '../catalog-more-button/catalog-more-button.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';


const Main = (props) => {
  const {
    promoFilmData,
    films,
    selectedGenre,
    currentFilmsCount,
    showedFilmsCount,
    cardClickHandler,
    onChangeGenre,
    onChangeShowedFilmsCount,
  } = props;

  return <React.Fragment>
    <MovieCard promoFilmData={promoFilmData}/>
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList
          films={films}
          activeGenre={selectedGenre}
          onChangeGenre={onChangeGenre}
        />
        <MoviesList
          films={films.slice(0, showedFilmsCount)}
          cardClickHandler={cardClickHandler}
        />

        {showedFilmsCount < currentFilmsCount ?
          <CatalogMoreButton
            onClickCatalogButton={onChangeShowedFilmsCount}
          /> :
          ``}
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
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    filmName: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
  })).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  showedFilmsCount: PropTypes.number.isRequired,
  currentFilmsCount: PropTypes.number.isRequired,
  cardClickHandler: PropTypes.func.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  onChangeShowedFilmsCount: PropTypes.func.isRequired,
};

export default Main;
