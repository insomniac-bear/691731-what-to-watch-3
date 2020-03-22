import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SmallMovieCard from './small-movie-card.jsx';

Enzyme.configure(
    {
      adapter: new Adapter()
    }
);

const mockData = {
  id: 0,
  filmName: `Name`,
  previewImage: `img/bohemian-rhapsody.jpg`,
  filmPreview: `some path`,
};

const mockHover = {
  updateState() {
    return true;
  }
};

const mockClick = {
  preventDefault() {
    return mockData.id;
  },
};

it(`Hover on small card film should pass to the callback data-object from film which hovered, click on card or title return id film`, () => {

  const onHoverHandler = jest.fn();
  const onMouseOutHandler = jest.fn();
  const loadComments = jest.fn();
  const updateFilmId = jest.fn();
  const activePageHandle = jest.fn();

  const smallMovieCardWrapper = mount(
      <SmallMovieCard
        filmData={mockData}
        onHover={onHoverHandler}
        onMouseOut={onMouseOutHandler}
        loadComments={loadComments}
        updateFilmId={updateFilmId}
        activePageHandle={activePageHandle}
        renderVideoPreview={() => {}}
      />
  );

  smallMovieCardWrapper.simulate(`mouseenter`, mockHover);

  expect(onHoverHandler).toHaveBeenCalledTimes(1);

  const title = smallMovieCardWrapper.find(`.small-movie-card__link`);
  const id = mockData.id;
  smallMovieCardWrapper.simulate(`click`, mockClick);
  title.simulate(`click`, mockClick);

  expect(updateFilmId.mock.calls[0][0]).toBe(id);
  expect(updateFilmId.mock.calls[1][0]).toBe(id);
});
