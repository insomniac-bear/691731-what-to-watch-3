import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should film title be pressed in all small film cards`, () => {
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
  const smallMovieCardTitleHandler = jest.fn();

  const main = mount(
      <Main
        promoFilmData={promoFilmData}
        filmsName={filmsName}
        onSmallMovieCardTitleClick={smallMovieCardTitleHandler}
      />
  );


  const smallMovieCardLinks = main.find(`a.small-movie-card__link`);

  smallMovieCardLinks.forEach((node) => {
    node.props().onClick();
  });

  expect(smallMovieCardTitleHandler.mock.calls.length).toBe(filmsName.length);
});
