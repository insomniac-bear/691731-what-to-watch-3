import React from 'react';
import PropTypes from 'prop-types';

const VideoPreview = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      <div className="small-movie-card__image">
        {children}
      </div>
    </React.Fragment>
  );
};

VideoPreview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default VideoPreview;
