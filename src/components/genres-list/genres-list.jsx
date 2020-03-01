import React from 'react';
import PropTypes from 'prop-types';

// Функция построения массива уникальных жанров по всем переданным фильмам
// На вход подается массив объектов с карточками фильмов
// На выходе массив с неповторяющимися именами жанров
const getUniqueGenere = (filmsList) => {
  const generesList = new Set();
  generesList.add(`All genres`);
  filmsList.forEach((film) => {
    generesList.add(film.genere);
  });

  return Array.from(generesList);
};

const GenresList = (props) => {
  const {films, activeGenere, onChangeGenere} = props;
  const generes = getUniqueGenere(films);

  return <React.Fragment>
    <ul className="catalog__genres-list">
      {generes.map((genere, i) => {
        return (
          <li
            key={`${genere}-${i}`}
            className={genere === activeGenere ?
              `catalog__genres-item catalog__genres-item--active` :
              `catalog__genres-item`} >
            <a
              href="{genere}"
              className="catalog__genres-link"
              onClick={(evt) => {
                evt.preventDefault();
                onChangeGenere(genere);
              }}
            >
              {genere}
            </a>
          </li>
        );
      })}
    </ul>
  </React.Fragment>;
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeGenere: PropTypes.string.isRequired,
  onChangeGenere: PropTypes.func.isRequired,
};

export default GenresList;
