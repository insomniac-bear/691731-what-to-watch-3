import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import MovieCard from './movie-card.jsx';
import {AuthorizationStatus} from '../../const.js';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);

it(`Render MovieCard`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      promoFilm: mockData.promoFilmData,
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
