import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

const filmData = {
  filmName: `Name`,
  posterUrl: `Some Poster`,
  genere: `Genere`,
  release: 1999,
  rating: 0,
  describe: `Some Describe`,
  director: `Director`,
  actors: `Actors`,
};

it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      filmData={filmData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
