import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = (props) => {
  const {promoFilmData, filmsName} = props;
  return (
    <Main
      promoFilmData={promoFilmData}
      filmsName={filmsName}
    />
  );
};

App.propTypes = {
  promoFilmData: PropTypes.shape({
    filmName: PropTypes.string,
    genere: PropTypes.string,
    releaseDate: PropTypes.number,
  }),
  filmsName: PropTypes.arrayOf(PropTypes.string),
};

export default App;
