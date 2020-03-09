import React from 'react';
import renderer from 'react-test-renderer';
import CatalogMoreButton from './catalog-more-button.jsx';

it(`Render CatalogMoreButton`, () => {
  const tree = renderer
    .create(<CatalogMoreButton
      onClickCatalogButton={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
