import React from 'react';
import PropTypes from 'prop-types';

const VideoPreview = (props) => {
  const {filmPreview, posterUrl} = props;
  return (
    <React.Fragment>
      <video
        src={filmPreview}
        poster={posterUrl}
        width="280"
        height="175"
        autoPlay
      >
      </video>
    </React.Fragment>
  );
};


VideoPreview.propTypes = {
  filmPreview: PropTypes.string,
  posterUrl: PropTypes.string,
};

export default VideoPreview;
