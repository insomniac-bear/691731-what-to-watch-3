import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {DEFAULT_GENRE} from '../../const.js';

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].allFilms;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

const getGenre = (state) => {
  return state[NameSpace.GENRE].selectedGenre;
};

export const getCommentsToFilm = (state) => {
  return state[NameSpace.GENRE].commentsToFilm;
};

export const getFilmsByGenre = createSelector(
    getAllFilms,
    getGenre,

    (resultOne, resultTwo) => {
      return resultTwo === DEFAULT_GENRE ? resultOne : resultOne.filter((it) => it.genre === resultTwo);
    }
);
