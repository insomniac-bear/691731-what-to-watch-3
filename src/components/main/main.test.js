import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const promoFilmData = {
  filmName: `Film Name`,
  genere: `Film Genere`,
  releaseDate: 1995,
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

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      promoFilmData={promoFilmData}
      films={films}
      onSmallMovieCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
