import React from 'react';
import PropTypes from 'prop-types';

const TabItem = (props) => {
  const {tabName, activeTab, tabChangeHandler} = props;

  return <React.Fragment>
    <li className={tabName === activeTab ? `movie-nav__item  movie-nav__item--active` : `movie-nav__item`}>
      <a
        href="#"
        className="movie-nav__link"
        onClick={(evt) => {
          evt.preventDefault();
          tabChangeHandler(tabName);
        }}
      >
        {tabName}
      </a>
    </li>
  </React.Fragment>;
};

TabItem.propTypes = {
  tabName: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabChangeHandler: PropTypes.func.isRequired,
};

export default TabItem;
