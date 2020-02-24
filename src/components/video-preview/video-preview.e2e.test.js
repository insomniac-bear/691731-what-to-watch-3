import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPreview from './video-preview.jsx.js';

const mockData = {
  filmPreview: `some film preview`,
  posterUrl: `some Url`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Video preview should have two state with different is Playing props`, () => {
  const {filmPreview, posterUrl} = mockData;

  const videoPreviewWrapper = (isPlaying) => {
    return mount(
        <VideoPreview
          isPlaying={isPlaying}
          filmPreview={filmPreview}
          posterUrl={posterUrl}
        />
    );
  };

  expect(videoPreviewWrapper(true).state(`isPlaying`)).toBe(true);
  expect(videoPreviewWrapper(false).state(`isPlaying`)).toBe(false);
});
