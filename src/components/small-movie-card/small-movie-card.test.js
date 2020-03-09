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
      hoveredElement={jest.mock()}
      onHover={jest.mock()}
      onMouseOut={jest.mock()}
      onCardClickHandler={jest.mock()}
      renderVideoPreview={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
