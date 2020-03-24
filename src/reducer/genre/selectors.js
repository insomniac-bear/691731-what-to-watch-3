import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.GENRE;

export const getSelectedGenre = (state) => {
  return state[NAME_SPACE].selectedGenre;
};

export const getFilmId = (state) => {
  return state[NAME_SPACE].filmId;
};

export const getShowedFilmsCount = (state) => {
  return state[NAME_SPACE].showedFilmsCount;
};

export const getActivePage = (state) => {
  return state[NameSpace.GENRE].activePage;
};
