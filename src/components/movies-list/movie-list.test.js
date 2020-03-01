import React from 'react';
import renderer from 'react-test-renderer';
import MovieList from './movies-list.jsx';

const films = [
  {
    id: 0,
    filmName: `Name-0`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `Some film url`,
  },
  {
    id: 1,
    filmName: `Name-1`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `Some film url`,
  },
  {
    id: 2,
    filmName: `Name-2`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `Some film url`,
  },
  {
    id: 3,
    filmName: `Name-3`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `Some film url`,
  },
  {
    id: 4,
    filmName: `Name-4`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `Some film url`,
  },
];

it(`Render MovieList`, () => {
  const tree = renderer
    .create(<MovieList
      genre={`All`}
      films={films}
      cardClickHandler={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
