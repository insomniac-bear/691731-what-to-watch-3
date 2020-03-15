import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import Reviews from './reviews.jsx';

const mockStore = configureStore([]);

const mockData = [
  {
    id: 0,
    user: {
      id: 2,
      name: `Author name`,
    },
    rating: 9.9,
    comment: `Some comment`,
    date: `January 01, 2001`,
  }
];

it(`Render Reviews tab`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      commentsToFilm: mockData,
    },
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Reviews
            comments={mockData}
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
