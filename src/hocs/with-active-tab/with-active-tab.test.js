import React from 'react';
import renderer from 'react-test-renderer';
import withActiveTab from './with-active-tab.js';

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};


const MockComponentWrapped = withActiveTab(MockComponent);

it(`withVideo is renderered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeTab={`Active tab`}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
