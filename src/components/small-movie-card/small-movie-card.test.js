import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const filmData = {
  id: 0,
  filmName: `Name`,
  posterUrl: `img/bohemian-rhapsody.jpg`
};

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      filmData={filmData}
      onHoverHandler={() => {}}
      onCardClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
