import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import Reviews from './reviews.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);
it(`Render Reviews tab`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      commentsToFilm: mockData.comments,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
