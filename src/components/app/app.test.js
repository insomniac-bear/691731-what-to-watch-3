import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';
import App from './app.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);

it(`Render App`, ()=> {
  const store = mockStore({
    [NameSpace.GENRE]: {
      selectedGenre: mockData.selectedGenre,
      filmId: mockData.filmId,
      showedFilmsCount: mockData.showedFilmsCount,
      activePage: `MAIN`,
    },
    [NameSpace.DATA]: {
      allFilms: mockData.films,
      promoFilm: mockData.promoFilmData,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentFilms={mockData.films}
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
