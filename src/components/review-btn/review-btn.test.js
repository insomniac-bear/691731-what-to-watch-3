import React from 'react';
import renderer from 'react-test-renderer';

import ReviewBtn from './review-btn.jsx';

it(`Render MovieCardButtons`, () => {
  const tree = renderer
    .create(
        <ReviewBtn />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
