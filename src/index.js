import React from 'react';
import ReactDOM from 'react-dom';
import films from './mocks/films.js';

import App from './components/app/app.jsx';

const promoFilmData = {
  filmName: `The Grand Budapest Hotel`,
  genere: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      promoFilmData={promoFilmData}
      films={films}
    />,
    document.querySelector(`#root`)
);
