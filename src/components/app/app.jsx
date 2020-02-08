import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const SmallMovieCardTitleHandler = () => {};

const App = (props) => {
  const {promoFilmData, filmsName} = props;
  return (
    <Main
      promoFilmData={promoFilmData}
      filmsName={filmsName}
      onSmallMovieCardTitleClick={SmallMovieCardTitleHandler}
    />
  );
};

App.propTypes = {
  promoFilmData: PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    genere: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  filmsName: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
