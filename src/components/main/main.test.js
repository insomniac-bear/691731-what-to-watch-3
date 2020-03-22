import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';

import Main from './main.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);


it(`Render Main`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: mockData.films,
      promoFilm: mockData.promoFilmData,
    },
    [NameSpace.GENRE]: {
      selectedGenre: mockData.selectedGenre,
      showedFilmsCount: mockData.showedFilmsCount,
    },
    [NameSpace.USER]: AuthorizationStatus.NO_AUTH,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            currentFilmsCount={4}
            onChangeShowedFilmsCount={jest.fn()}
            showedFilmsCount={2}
            activePageHandle={jest.fn()}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
