import React from 'react';
import renderer from 'react-test-renderer';
import Overview from './overview.jsx';
import {mockData} from '../../mock-data.js';

it(`Render Overview tab`, () => {
  const tree = renderer
    .create(<Overview
      filmData={mockData.films[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
