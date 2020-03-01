import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './page-header.jsx';


it(`Render page header`, () => {
  const tree = renderer
    .create(<PageHeader
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});