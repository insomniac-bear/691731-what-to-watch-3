import React from 'react';
import renderer from 'react-test-renderer';
import Details from './details.jsx';
import {mockData} from '../../mock-data';

it(`Render Details tab`, () => {
  const tree = renderer
    .create(<Details
      filmData={mockData.films[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
