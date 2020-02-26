import React from 'react';
import renderer from 'react-test-renderer';
import TabItem from './tab-item.jsx';

const mockData = {
  tabName: `Name`,
  activeTab: `activeTab`,
};

it(`Render Tab item`, () => {
  const tree = renderer
    .create(<TabItem
      tabName={mockData.tabName}
      activeTab={mockData.activeTab}
      tabChangeHandler={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
