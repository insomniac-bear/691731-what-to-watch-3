import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure(
    {
      adapter: new Adapter()
    }
);

const mockData = {
  id: 0,
  filmName: `Name`,
  posterUrl: `img/bohemian-rhapsody.jpg`
};

const mockEvent = {
  updateState() {
    return mockData;
  }
};

it(`Hover on small card film should pass to the callback data-object from film which hovered`, () => {

  const onHoverHandler = jest.fn();

  const screen = shallow(
      <SmallMovieCard
        filmData={mockData}
        onHoverHandler={onHoverHandler}
      />
  );

  screen.simulate(`mouseenter`, mockEvent);

  expect(onHoverHandler).toHaveBeenCalledTimes(1);
  expect(onHoverHandler.mock.calls[0][0]).toMatchObject(mockData);
});
