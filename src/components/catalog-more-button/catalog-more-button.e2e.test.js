import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CatalogMoreButton from './catalog-more-button.jsx';

Enzyme.configure(
    {
      adapter: new Adapter(),
    }
);

const mockClick = {
  preventDefault() {}
};

it(`Click on CatalogMoreButton should be`, () => {
  const onClick = jest.fn();

  const catalogMoreButtonWrapper = shallow(
      <CatalogMoreButton
        onClickCatalogButton={onClick}
      />
  );

  const button = catalogMoreButtonWrapper.find(`.catalog__button`);

  button.simulate(`click`, mockClick);
  expect(onClick).toHaveBeenCalledTimes(1);
});
