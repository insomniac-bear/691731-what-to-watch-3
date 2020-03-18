import React from 'react';
import PropTypes from 'prop-types';

import Details from '../details/details.jsx';
import Overview from '../overview/overview.jsx';
import Reviews from '../reviews/reviews.jsx';

const TABS_NAME = [`Overview`, `Details`, `Reviews`];

const renderTabContent = (activeTab, data) => {
  switch (activeTab) {
    case `Overview`:
      return <Overview filmData={data}/>;
    case `Details`:
      return <Details filmData={data}/>;
    case `Reviews`:
      return <Reviews />;
    default:
      break;
  }
  return <p>Sorry, shit happenes</p>;
};


const Tabs = (props) => {
  const {
    activeTab,
    filmData,
    renderTab
  } = props;

  return <React.Fragment>
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            TABS_NAME.map((tabName, index) => renderTab(tabName, index))
          }
        </ul>
      </nav>

      {renderTabContent(activeTab, filmData)}

    </div>
  </React.Fragment>;
};


Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  filmData: PropTypes.shape().isRequired,
  renderTab: PropTypes.func.isRequired,
};

export default Tabs;
