import React from 'react';
import PropTypes from 'prop-types';

const VideoPreview = (props) => {
  const {children} = props;

  return (
    <div className="small-movie-card__image">
      {children}
    </div>
  );
};

VideoPreview.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default VideoPreview;
