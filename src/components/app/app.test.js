import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilmData = {
  filmName: `Film Name`,
  genere: `Genere`,
  releaseDate: 1999,
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

it(`Render App`, ()=> {
  const tree = renderer
    .create(<App
      promoFilmData={promoFilmData}
      filmsName={filmsName}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
