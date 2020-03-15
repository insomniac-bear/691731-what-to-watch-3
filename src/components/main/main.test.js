import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mockData = {
  films: [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    }
  ],
  showedFilmsCount: 8,
};

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      currentFilmsCount={mockData.films.length}
      showedFilmsCount={mockData.showedFilmsCount}
      onChangeShowedFilmsCount={jest.fn()}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
