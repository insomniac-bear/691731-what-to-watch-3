import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilmData = {
  filmName: `Film Name`,
  genere: `Film Genere`,
  releaseDate: 1995,
};

const filmsName = [
  `film-1`,
  `film-2`,
  `film-3`,
  `film-4`,
  `film-5`,
  `film-6`,
  `film-7`,
  `film-8`
];

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      promoFilmData={promoFilmData}
      filmsName={filmsName}
      onSmallMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
