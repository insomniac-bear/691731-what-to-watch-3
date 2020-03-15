import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const mockData = {
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
};

it(`Render TabsPage`, () => {
  const tree = renderer
    .create(<Tabs
      filmData={mockData}
      activeTab={`Overview`}
      renderTab={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
