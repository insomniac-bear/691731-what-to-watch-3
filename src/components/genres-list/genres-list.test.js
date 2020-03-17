import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import GenresList from './genres-list.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);

it(`Render list of Genres`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: mockData.films,
    },
    [NameSpace.GENRE]: {
      selectedGenre: mockData.selectedGenre,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList
            onChangeGenre={jest.fn()}
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
