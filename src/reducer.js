import {extend} from './utils.js';
import films from './mocks/films.js';

const initialState = {
  selectedGenre: `All genres`,
  currentFilms: films,
  filmId: -1,
};

const ActionType = {
  ON_CHANGE_GENRE: `ON_CHANGE_GENRE`,
  GET_FILMS_OF_GENRE: `GET_FILMS_OF_GENRE`,
  UPDATE_FILM_ID: `UPDATE_FILM_ID`,
};

const ActionCreator = {
  onChangeGenre: (genre) => ({
    type: ActionType.ON_CHANGE_GENRE,
    payload: genre,
  }),

  getFilmsOfGenre: () => ({
    type: ActionType.GET_FILMS_OF_GENRE,
  }),

  updateFilmId: (id) => ({
    type: ActionType.UPDATE_FILM_ID,
    payload: id,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ON_CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.GET_FILMS_OF_GENRE:
      const {genre} = state;

      if (genre === `All genres`) {
        return extend(state, {
          currentFilms: films,
        });
      }
      return extend(state, {
        currentFilms: films.filter((film) => film.genre === genre)
      });

    case ActionType.UPDATE_FILM_ID:
      return extend(state, {
        filmId: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
