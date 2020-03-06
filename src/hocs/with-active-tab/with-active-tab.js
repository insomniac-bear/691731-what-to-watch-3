import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import TabItem from '../../components/tab-item/tab-item.jsx';

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: `Overview`,
      };

      this._onChangeActiveTab = this._onChangeActiveTab. bind(this);
    }

    _onChangeActiveTab(newTab) {
      this.setState({
        activeTab: newTab,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeTab={this.state.activeTab}
        renderTab={(tabName, index) => {
          return (
            <TabItem
              key={`${tabName}-${index}`}
              tabName={tabName}
              activeTab={this.state.activeTab}
              tabChangeHandler={this._onChangeActiveTab}
            />
          );
        }}
      />;
    }
  }

  WithActiveTab.propTypes = {
    activeTab: PropTypes.string,
  };

  return WithActiveTab;
};

export default withActiveTab;
