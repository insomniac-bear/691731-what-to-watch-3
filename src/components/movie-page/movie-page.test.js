import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page.jsx';

const mockData = {
  allFilms: [
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
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
  ],
};

it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<MoviePage
      filmData={mockData.allFilms[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
