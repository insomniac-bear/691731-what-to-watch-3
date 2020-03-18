import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizedUserBlock from './authorized-user-block.jsx';

it(`Render AuthorizedUserBlock`, () => {
  const tree = renderer
    .create(<AuthorizedUserBlock />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
