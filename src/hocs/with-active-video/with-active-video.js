import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPreview from '../../components/video-preview/video-preview.jsx';

const withActiveVideo = (Component) => {
  class WithActiveVideo extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };
      this._onHover = this._onHover.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
    }

    _onHover() {
      this.timerId = clearTimeout();
      this.timerId = setTimeout(() => {
        this.setState({isPlaying: true});
      }, 1000);
    }

    _onMouseOut() {
      this.timerId = clearTimeout();
      this.setState({isPlaying: false});
    }

    render() {
      return <Component
        {...this.props}
        onHover={this._onHover}
        onMouseOut={this._onMouseOut}
        renderVideoPreview={(filmPreview, posterUrl) => {
          return (
            <VideoPreview
              isPlaying={this.state.isPlaying}
              filmPreview={filmPreview}
              posterUrl={posterUrl}
            />
          );
        }}
      />;
    }
  }

  WithActiveVideo.propTypes = {
    isPlaying: PropTypes.bool,
  };

  return WithActiveVideo;
};

export default withActiveVideo;
