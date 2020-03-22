import React from 'react';
import renderer from 'react-test-renderer';
import NoAuthorizedUserBlock from './no-authorized-user-block.jsx';

it(`Render NoAuthorizedUserBlock`, () => {
  const tree = renderer
    .create(
        <NoAuthorizedUserBlock
          activePageHandle={jest.fn()}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
