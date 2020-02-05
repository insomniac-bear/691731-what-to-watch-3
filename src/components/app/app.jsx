import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {filmName, genere, releaseDate} = props;
  return (
    <Main
      filmName={filmName}
      genere={genere}
      releaseDate={releaseDate}
    />
  );
};

export default App;
