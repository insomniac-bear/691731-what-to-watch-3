import React from 'react';

const AuthorizedUserBlock = () => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    </div>
  );
};

export default AuthorizedUserBlock;