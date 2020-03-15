import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import SmallMovieCard from './small-movie-card.jsx';

const mockStore = configureStore([]);

const mockFilmData = {
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
};

it(`Render SmallMovieCard`, () => {
  const store = mockStore({
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SmallMovieCard
            filmData={mockFilmData}
            hoveredElement={jest.fn()}
            onHover={jest.fn()}
            onMouseOut={jest.fn()}
            onCardClickHandler={jest.fn()}
            renderVideoPreview={jest.fn()}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
