import React from 'react';
import PropTypes from 'prop-types';

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
  const {films, activeGenre, onChangeGenre} = props;
  const genres = getUniqueGenre(films);

  return <React.Fragment>
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li
            key={`${genre}-${i}`}
            className={genre === activeGenre ?
              `catalog__genres-item catalog__genres-item--active` :
              `catalog__genres-item`} >
            <a
              href="{genre}"
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
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

export default GenresList;
