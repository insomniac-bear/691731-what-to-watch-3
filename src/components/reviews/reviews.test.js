import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

const mockData = [
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
];

it(`Render Reviews tab`, () => {
  const tree = renderer
    .create(<Reviews
      comments={mockData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
