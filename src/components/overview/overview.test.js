import React from 'react';
import renderer from 'react-test-renderer';
import Overview from './overview.jsx';

const mockData = {
  id: 0,
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

it(`Render Overview tab`, () => {
  const tree = renderer
    .create(<Overview
      filmData={mockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
