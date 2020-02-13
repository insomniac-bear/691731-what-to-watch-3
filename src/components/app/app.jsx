import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = (props) => {
  const {promoFilmData, films} = props;
  return (
    <Main
      promoFilmData={promoFilmData}
      films={films}
    />
  );
};

App.propTypes = {
  promoFilmData: PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    genere: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.isRequired,
    filmName: PropTypes.string,
    posterUrl: PropTypes.string,
  })).isRequired,
};

export default App;
