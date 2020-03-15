import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/genre/genre.js';
import {getAllFilms} from '../../reducer/data/selectors.js';
import {getSelectedGenre} from '../../reducer/genre/selectors.js';

// Функция построения массива уникальных жанров по всем переданным фильмам
// На вход подается массив объектов с карточками фильмов
// На выходе массив с неповторяющимися именами жанров
const getUniqueGenre = (filmsList) => {
  const genresList = new Set();
  genresList.add(`All genres`);
  filmsList.forEach((film) => {
    genresList.add(film.genre);
  });

  return Array.from(genresList);
};

const GenresList = (props) => {
  const {allFilms, selectedGenre, onChangeGenre} = props;
  const genres = getUniqueGenre(allFilms);

  return <React.Fragment>
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li
            key={`${genre}-${i}`}
            className={genre === selectedGenre ?
              `catalog__genres-item catalog__genres-item--active` :
              `catalog__genres-item`} >
            <a
              href={genre}
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeGenre(genre);
              }}
            >
              {genre}
            </a>
          </li>
        );
      })}
    </ul>
  </React.Fragment>;
};

GenresList.propTypes = {
  allFilms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  allFilms: getAllFilms(state),
  selectedGenre: getSelectedGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.onChangeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
