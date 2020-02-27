import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details.jsx';

const mockData = {
  id: 0,
  filmName: `Film Named`,
  posterUrl: `someUrl`,
  genere: `Genere`,
  release: 2018,
  runtime: 99,
  rating: 9.9,
  describe: `Some discribe`,
  director: `Director`,
  actors: `Actor, Actor, Actor`,
  comments: [
    {
      author: `Author name`,
      rating: 9.9,
      date: `January 01, 2001`,
      textComment: `Some comment`,
    },
    {
      author: `Author name`,
      rating: 9.9,
      date: `January 01, 2001`,
      textComment: `Some comment`,
    },
    {
      author: `Author name`,
      rating: 9.9,
      date: `January 01, 2001`,
      textComment: `Some comment`,
    }
  ],
};

it(`Render Details tab`, () => {
  const tree = renderer
    .create(<Details
      filmData={mockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
