import React from 'react';

const NoAuthorizedUserBlock = () => {
  return (
    <div className="user-block">
      <a href="sign-in.html" className="user-block__link">Sign in</a>
    </div>
  );
};

export default NoAuthorizedUserBlock;
