import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movies-list.jsx';

const films = [
  {
    id: 0,
    filmName: `Name-0`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 1,
    filmName: `Name-1`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 2,
    filmName: `Name-2`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 3,
    filmName: `Name-3`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
  {
    id: 4,
    filmName: `Name-4`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
];

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<MovieList
      films={films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
