import React from 'react';
import renderer from 'react-test-renderer';
import VideoPreview from './video-preview.jsx';

const mockFilmData = {
  id: 0,
  posterUrl: `img/bohemian-rhapsody.jpg`,
  filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
