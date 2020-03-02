import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenresList from './genres-list.jsx';

Enzyme.configure(
    {
      adapter: new Adapter()
    }
);

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


const mockClick = {
  preventDefault() {
    return mockData.genre;
  },
};

it(`Click on genre item return genre name`, () => {

  const onChangeGenre = jest.fn();

  const genresListWrapper = shallow(
      <GenresList
        films={mockData}
        activeGenre={mockData[0].genre}
        onChangeGenre={onChangeGenre}
      />
  );

  const link = genresListWrapper.find(`.catalog__genres-link`);

  link.forEach((node) => {
    node.simulate(`click`, mockClick);
  });

  expect(onChangeGenre).toHaveBeenCalledTimes(mockData.length + 1);
  expect(onChangeGenre.mock.calls[0][0]).toBe(`All genres`);
});
