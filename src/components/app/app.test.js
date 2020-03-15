import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';
import App from './app.jsx';

const mockStore = configureStore([]);

const mockData = {
  films: [
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
  ],
  promoFilmData: {
    filmName: `Film Name`,
    genre: `Film Genre`,
    releaseDate: 1995,
    backgroundColor: `#000000`,
  },
  showedFilmsCount: 8,
};

it(`Render App`, ()=> {
  const store = mockStore({
    [NameSpace.GENRE]: {
      selectedGenre: `All genres`,
    },
    [NameSpace.DATA]: {
      allFilms: mockData.films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    filmId: 2,
    showedFilmsCount: mockData.showedFilmsCount,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentFilms={mockData.films}
            promoFilmData={mockData.promoFilmData}
            updateFilmId={jest.fn()}
            onChangeGenre={jest.fn()}
            onChangeShowedFilmsCount={jest.fn()}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
