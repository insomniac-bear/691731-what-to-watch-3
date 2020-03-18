import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import MoviePage from './movie-page.jsx';
import {AuthorizationStatus} from '../../const.js';
import {mockData} from '../../mock-data.js';

const mockStore = configureStore([]);


it(`Render MoviePage`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: mockData.films,
    },
    [NameSpace.GENRE]: {
      selectedGenre: mockData.selectedGenre,
      showedFilmsCount: mockData.showedFilmsCount,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MoviePage
            filmData={mockData.films[0]}
            films={()=>{}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
