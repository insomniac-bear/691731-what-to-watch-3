import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const promoFilmData = {
  filmName: `The Grand Budapest Hotel`,
  genere: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
    <App
      filmName={promoFilmData.filmName}
      genere={promoFilmData.genere}
      releaseDate={promoFilmData.releaseDate}
    />,
    document.querySelector(`#root`)
);
