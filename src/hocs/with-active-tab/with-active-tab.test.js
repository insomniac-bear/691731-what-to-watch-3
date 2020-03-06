import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withActiveTab from './with-active-tab.js';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
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
