import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const mockFilmData = {
  id: 0,
  filmName: `Name`,
  posterUrl: `img/bohemian-rhapsody.jpg`,
  filmPreview: `Some film url`,
};

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      filmData={mockFilmData}
      hoveredElement={mockFilmData}
      onHoverHandler={() => {}}
      onMouseOut={() => {}}
      onCardClickHandler={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
