import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const promoFilmData = {
  filmName: `Film Name`,
  genre: `Film Genre`,
  releaseDate: 1999,
};

it(`Render MovieCard`, () => {
  const tree = renderer
    .create(<MovieCard promoFilmData={promoFilmData} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
