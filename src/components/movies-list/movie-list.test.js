import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import MovieList from './movies-list.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);

it(`Render MovieList`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: mockData.films,
    },
    [NameSpace.GENRE]: {
      showedFilmsCount: mockData.showedFilmsCount,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieList
            showedFilmsCount={8}
            currentFilms={jest.fn()}
            loadComments={jest.fn()}
            updateFilmId={jest.fn()}
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
