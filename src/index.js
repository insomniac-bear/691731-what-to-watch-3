import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const FILMS_NAME = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`
];

const promoFilmData = {
  filmName: `The Grand Budapest Hotel`,
  genere: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      promoFilmData={promoFilmData}
      filmsName={FILMS_NAME}
    />,
    document.querySelector(`#root`)
);
