import {extend} from './utils.js';
import films from './mocks/films.js';

const getSortedFilmsList = (filmsList, genre) => {
  if (genre === `All genres`) {
    return filmsList;
  }

  return filmsList.filter((film) => film.genre === genre);
};

const defaultFilmsCount = {
  COUNT_IN_CATALOG: 8,
  COUNT_IN_MORE_LIKE: 4,
};

const initialState = {
  selectedGenre: `All genres`,
  allFilms: films,
  currentFilms: films,
  filmId: -1,
  showedFilmsCount: defaultFilmsCount.COUNT_IN_CATALOG,
};

const ActionType = {
  ON_CHANGE_GENRE: `ON_CHANGE_GENRE`,
  UPDATE_FILM_ID: `UPDATE_FILM_ID`,
  ON_CHANGE_SHOWED_FILMS_COUNT: `ON_CHANGE_SHOWED_FILMS_COUNT`,
};

const ActionCreator = {
  onChangeGenre: (genre) => ({
    type: ActionType.ON_CHANGE_GENRE,
    payload: genre,
  }),

  updateFilmId: (id) => ({
    type: ActionType.UPDATE_FILM_ID,
    payload: id,
  }),

  onChangeShowedFilmsCount: () => ({
    type: ActionType.ON_CHANGE_SHOWED_FILMS_COUNT,
    payload: defaultFilmsCount.COUNT_IN_CATALOG,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ON_CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
        currentFilms: getSortedFilmsList(films, action.payload),
        showedFilmsCount: defaultFilmsCount.COUNT_IN_CATALOG,
      });

    case ActionType.UPDATE_FILM_ID:
      return extend(state, {
        filmId: action.payload,
        selectedGenre: films[action.payload].genre,
        currentFilms: getSortedFilmsList(films, films[action.payload].genre),
        showedFilmsCount: defaultFilmsCount.COUNT_IN_MORE_LIKE,
      });

    case ActionType.ON_CHANGE_SHOWED_FILMS_COUNT:
      return extend(state, {
        showedFilmsCount: (state.showedFilmsCount < state.currentFilms.length) ? state.showedFilmsCount + defaultFilmsCount.COUNT_IN_CATALOG : state.showedFilmsCount.length,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
