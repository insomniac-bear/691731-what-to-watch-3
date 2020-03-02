import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoPreview from "./with-video-preview.js";

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

const MockComponent = () => <div />;
const MockComponentWrapped = withVideoPreview(MockComponent);

it(`Should change withVideo`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        film={mockData}
        onCardClickHandler={() => {}}
        onHoverHandler={() => {}}
      />);

  wrapper.instance()._onHoverHandler(mockData);
  setTimeout(() => {
    expect(wrapper.state().isPlaying).toEqual(true);
  }, 1000);

  wrapper.instance()._onHoverHandler();
  expect(wrapper.state().isPlaying).toEqual(false);
});
