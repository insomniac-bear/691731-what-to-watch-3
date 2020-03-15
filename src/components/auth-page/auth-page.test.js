import React from 'react';
import renderer from 'react-test-renderer';
import AuthPage from './auth-page.jsx';

it(`Render AuthPage`, () => {
  const tree = renderer
    .create(<AuthPage
      onSubmit={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
