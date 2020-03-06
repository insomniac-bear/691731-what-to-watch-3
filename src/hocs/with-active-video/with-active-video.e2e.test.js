import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveVideo from './with-active-video.js';

const mockData = {
  id: `id-0`,
  name: `FilmName`,
  genre: `SomeGenre`,
  release: 9999,
  posterUrl: `SomePosterUrl`,
  filmPreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  runtime: 99,
  rating: 9.9,
  director: `AnyDirector`,
  describe: `SomeDescribe`,
  comments: [
    {
      author: `AnyOne`,
      rating: 10,
      date: `January 01, 1001`,
      textComment: `SomeComment`
    },
  ],
};

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveVideo(MockComponent);

it(`Should change withVideo`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        film={mockData}
        onCardClickHandler={() => {}}
        onHover={() => {}}
        onMouseOut={() => {}}
      />);

  wrapper.instance()._onHover(mockData);
  setTimeout(() => {
    expect(wrapper.state().isPlaying).toEqual(true);
  }, 1000);

  wrapper.instance()._onHover();
  expect(wrapper.state().isPlaying).toEqual(false);
});
