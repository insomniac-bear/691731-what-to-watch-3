import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import AuthorizedUserblock from '../authorized-user-block/authorized-user-block.jsx';
import NoAuthorizedUserBlock from '../no-authorized-user-block/no-authorized-user-block.jsx';
import {display} from '../../utils.js';
import {AuthorizationStatus} from '../../const.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';

const PageHeader = (props) => {
  const {authorizationStatus} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {
        display(
            {
              isVisible: authorizationStatus === AuthorizationStatus.AUTH,
              childrenTrue: <AuthorizedUserblock/>,
              childrenFalse: <NoAuthorizedUserBlock/>,
            }
        )
      }
    </header>
  );
};

PageHeader.propTypes = {
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
