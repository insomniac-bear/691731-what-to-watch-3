import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details.jsx';

const mockData = {
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

it(`Render Details tab`, () => {
  const tree = renderer
    .create(<Details
      filmData={mockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
