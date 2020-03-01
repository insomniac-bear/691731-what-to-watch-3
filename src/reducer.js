import {extend} from './utils.js';
import films from './mocks/films.js';

const initialState = {
  genere: `All`,
  currentFilms: films,
};

const ActionType = {
  CHANGE_GENERE: `CHANHE_GENERE`,
  GET_FILMS_OF_GENERE: `GET_FILMS_OF_GENERE`,
};

const ActionCreator = {
  changeGenere: (genere) => ({
    type: ActionType.CHANGE_GENERE,
    payload: genere,
  }),

  getFilmsOfGenere: () => ({
    type: ActionType.GET_FILMS_OF_GENERE,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENERE:
      return extend(state, {
        genere: action.payload,
      });
    case ActionType.GET_FILMS_OF_GENERE:
      const {genere, filmsList} = state;

      if (genere === `All`) {
        return extend(state, {
          currentFilms: films,
        });
      }

      return extend(state, {currentFilms: filmsList.filter((film) => film.genere === genere)});
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
