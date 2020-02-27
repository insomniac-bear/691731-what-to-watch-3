import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Details from '../details/details.jsx';
import Overview from '../overview/overview.jsx';
import Reviews from '../reviews/reviews.jsx';
import TabItem from '../tab-item/tab-item.jsx';

const TABS_NAME = [`Overview`, `Details`, `Reviews`];

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `Overview`,
    };

    this._onChangeActiveTab = this._onChangeActiveTab.bind(this);
  }

  _onChangeActiveTab(newTab) {
    this.setState({
      activeTab: newTab,
    });
  }

  _renderTabContent() {
    const {filmData} = this.props;

    switch (this.state.activeTab) {
      case `Overview`:
        return <Overview filmData={filmData}/>;
      case `Details`:
        return <Details filmData={filmData}/>;
      case `Reviews`:
        return <Reviews comments={filmData.comments} />;
      default:
        break;
    }
    return <p>Sorry, shit happenes</p>;
  }

  render() {
    return <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TABS_NAME.map((tabName, index) => <TabItem key={tabName + index} tabName={tabName} activeTab={this.state.activeTab} tabChangeHandler={this._onChangeActiveTab} />)}
          </ul>
        </nav>

        {this._renderTabContent()}

      </div>
    </React.Fragment>;
  }
}

Tabs.propTypes = {
  filmData: PropTypes.shape().isRequired,
};

export default Tabs;
