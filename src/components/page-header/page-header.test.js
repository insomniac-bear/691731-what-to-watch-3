import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../const.js';
import PageHeader from './page-header.jsx';

const mockStore = configureStore([]);

it(`Render page header`, () => {
  const store = mockStore({
    [NameSpace.USER]: AuthorizationStatus.NO_AUTH,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <PageHeader />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
