import React from 'react';
import PropTypes from 'prop-types';
import {ActivePage} from '../../reducer/genre/genre.js';

const NoAuthorizedUserBlock = (props) => {
  const {activePageHandle} = props;
  return (
    <div className="user-block">
      <a href="sign-in.html"
        className="user-block__link"
        onClick={(evt) => {
          evt.preventDefault();
          activePageHandle(ActivePage.AUTH_PAGE);
        }}
      >
        Sign in
      </a>
    </div>
  );
};

NoAuthorizedUserBlock.propTypes = {
  activePageHandle: PropTypes.func.isRequired,
};

export default NoAuthorizedUserBlock;
