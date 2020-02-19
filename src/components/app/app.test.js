import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const promoFilmData = {
  filmName: `Film Name`,
  genere: `Genere`,
  releaseDate: 1999,
};

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

const filmsDetails = [
  {
    id: 0,
    filmName: `Name-0`,
    posterUrl: `poster-0`,
    genere: `genere-0`,
    release: 0,
    rating: 0,
    describe: `describe-0`,
    director: `director-0`,
    actors: `actors-0`,
  },
  {
    id: 1,
    filmName: `Name-1`,
    posterUrl: `poster-1`,
    genere: `genere-1`,
    release: 1,
    rating: 1,
    describe: `describe-1`,
    director: `director-1`,
    actors: `actors-1`,
  },
  {
    id: 2,
    filmName: `Name-2`,
    posterUrl: `poster-2`,
    genere: `genere-2`,
    release: 2,
    rating: 2,
    describe: `describe-2`,
    director: `director-2`,
    actors: `actors-2`,
  },
  {
    id: 3,
    filmName: `Name-3`,
    posterUrl: `poster-3`,
    genere: `genere-3`,
    release: 3,
    rating: 3,
    describe: `describe-3`,
    director: `director-3`,
    actors: `actors-3`,
  },
  {
    id: 4,
    filmName: `Name-4`,
    posterUrl: `poster-4`,
    genere: `genere-4`,
    release: 4,
    rating: 4,
    describe: `describe-4`,
    director: `director-4`,
    actors: `actors-4`,
  }
];

it(`Render App`, ()=> {
  const tree = renderer
    .create(<App
      promoFilmData={promoFilmData}
      films={films}
      filmsDetails={filmsDetails}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
