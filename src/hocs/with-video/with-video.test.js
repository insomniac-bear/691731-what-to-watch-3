import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withVideo from './with-video.js';

const mockFilmData = {
  id: 0,
  filmName: `Some name`,
  posterImage: `Some url`,
  previewImage: `Some url`,
  backgroundImage: `Some url`,
  backgroundColor: `#000000`,
  filmSrc: `Some url`,
  filmPreview: `Some url`,
  genre: `Some genre`,
  release: 1999,
  runtime: 99,
  rating: 99,
  scoresCount: 99,
  describe: `Some description`,
  director: `Director`,
  actors: [`Actor`, `Actor`],
  isFavorite: false,
  isPlaying: true,
};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`withVideo is renderered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      filmPreview={mockFilmData.filmPreview}
      posterUrl={mockFilmData.posterUrl}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
