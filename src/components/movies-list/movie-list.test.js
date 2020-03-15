import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import MovieList from './movies-list.jsx';

const mockStore = configureStore([]);

const films = [
  {
    id: 0,
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
  },
  {
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
];

it(`Render MovieList`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
    },
    [NameSpace.GENRE]: {
      showedFilmsCount: 8,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieList
            currentFilms={films}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
