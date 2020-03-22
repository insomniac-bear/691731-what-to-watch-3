import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import SmallMovieCard from './small-movie-card.jsx';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);

it(`Render SmallMovieCard`, () => {
  const store = mockStore({
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SmallMovieCard
            filmData={mockData.films[0]}
            hoveredElement={jest.fn()}
            onHover={jest.fn()}
            onMouseOut={jest.fn()}
            renderVideoPreview={jest.fn()}
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
