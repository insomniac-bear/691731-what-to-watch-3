import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

const mockData = [
  {
    id: 0,
    filmName: `Name-0`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `genre-0`,
    release: 0,
    rating: 0,
    describe: `describe-0`,
    director: `director-0`,
    actors: `actors-0`,
    comments: [
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
    ],
  },
  {
    id: 1,
    filmName: `Name-1`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `genre-1`,
    release: 0,
    rating: 0,
    describe: `describe-1`,
    director: `director-1`,
    actors: `actors-1`,
    comments: [
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
    ],
  },
  {
    id: 2,
    filmName: `Name-2`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `genre-2`,
    release: 0,
    rating: 0,
    describe: `describe-2`,
    director: `director-2`,
    actors: `actors-2`,
    comments: [
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
      {
        author: `author-0`,
        rating: 0,
        date: `0000-01-01`,
        textComment: `Some comment`,
      },
    ]
  }
];

it(`Render list of Genres`, () => {
  const tree = renderer
    .create(<GenresList
      films={mockData}
      activeGenre={mockData[0].genre}
      onChangeGenre={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
