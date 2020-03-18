import {extend} from '../../utils.js';
import {DefaultFilmsCount, DEFAULT_GENRE} from '../../const.js';

const initialState = {
  selectedGenre: DEFAULT_GENRE,
  filmId: -1,
  showedFilmsCount: DefaultFilmsCount.COUNT_IN_CATALOG,
};

const ActionType = {
  ON_CHANGE_GENRE: `ON_CHANGE_GENRE`,
  UPDATE_FILM_ID: `UPDATE_FILM_ID`,
  ON_CHANGE_SHOWED_FILMS_COUNT: `ON_CHANGE_SHOWED_FILMS_COUNT`,
  RESET_SHOWED_FILMS_COUNT: `RESET_SHOWED_FILMS_COUNT`,
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
    payload: DefaultFilmsCount.COUNT_IN_CATALOG,
  }),

  resetShowedFilmsCount: () => ({
    type: ActionType.RESET_SHOWED_FILMS_COUNT,
    payload: DefaultFilmsCount.COUNT_IN_CATALOG,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ON_CHANGE_GENRE:
      return extend(state, {
        selectedGenre: action.payload,
      });

    case ActionType.UPDATE_FILM_ID:
      return extend(state, {
        filmId: action.payload,
        showedFilmsCount: DefaultFilmsCount.COUNT_IN_MORE_LIKE,
      });

    case ActionType.ON_CHANGE_SHOWED_FILMS_COUNT:
      return extend(state, {
        showedFilmsCount: state.showedFilmsCount + DefaultFilmsCount.COUNT_IN_CATALOG,
      });

    case ActionType.RESET_SHOWED_FILMS_COUNT:
      return extend(state, {
        showedFilmsCount: DefaultFilmsCount.COUNT_IN_CATALOG,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
