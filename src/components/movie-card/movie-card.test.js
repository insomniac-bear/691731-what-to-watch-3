import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import MovieCard from './movie-card.jsx';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

const promoFilmData = {
  id: 1,
  filmName: `Some name`,
  posterImage: `Some url`,
  previewImage: `Some url`,
  backgroundImage: `Some url`,
  backgroundColor: `#000000`,
  filmSrc: `Some url`,
  filmPreview: `Some url`,
  genre: `Some genre`,
  release: 1999,
  runtime: 99,
  rating: 99,
  scoresCount: 99,
  describe: `Some description`,
  director: `Director`,
  actors: [`Actor`, `Actor`],
  isFavorite: false,
};

it(`Render MovieCard`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      promoFilm: promoFilmData,
    },
    [NameSpace.USER]: AuthorizationStatus.NO_AUTH,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCard />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
