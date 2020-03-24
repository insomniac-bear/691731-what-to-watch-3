import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';
import AuthPage from './auth-page.jsx';
import {AuthorizationStatus} from '../../const.js';

const mockStore = configureStore([]);

it(`Render AuthPage`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <AuthPage
            onSubmit={jest.fn()}
            activePageHandle={jest.fn}
            login={jest.fn}
            activePage={`MAIN`}
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
