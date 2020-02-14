import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure(
    {
      adapter: new Adapter()
    }
);

it(`Hover on small card film should pass to the callback data-object from film which hovered`, () => {
  const filmData = {
    id: 0,
    filmName: `Name`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  };
  const updateState = jest.fn();

  const screen = shallow(
      <SmallMovieCard
        filmData={filmData}
        onHoverHandler={() => updateState()}
      />
  );

  console.log(screen);
});
