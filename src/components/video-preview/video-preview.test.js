import React from 'react';
import renderer from 'react-test-renderer';
import VideoPreview from './video-preview.jsx';

const mockFilmData = {
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

it(`Render VideoPreview`, () => {
  const tree = renderer
    .create(<VideoPreview
      isPlaying={mockFilmData.isPlayinf}
      filmPreview={mockFilmData.filmPreview}
      posterUrl={mockFilmData.posterUrl}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
