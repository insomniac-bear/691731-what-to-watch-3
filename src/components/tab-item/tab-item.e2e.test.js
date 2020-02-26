import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TabItem from './tab-item.jsx';

Enzyme.configure(
    {
      adapter: new Adapter()
    }
);

const mockData = {
  tabName: `Name`,
  activeTab: `activeTab`,
};

const mockClick = {
  preventDefault() {
    return mockData.tabName;
  },
};

it(`Click on tab return tab name`, () => {

  const tabChangeHandler = jest.fn();

  const tabItemWrapper = shallow(
      <TabItem
        tabName={mockData.tabName}
        activeTab={mockData.activeTab}
        tabChangeHandler={tabChangeHandler}
      />
  );

  const link = tabItemWrapper.find(`.movie-nav__link`);

  link.simulate(`click`, mockClick);

  expect(tabChangeHandler.mock.calls[0][0]).toBe(mockData.tabName);
});
