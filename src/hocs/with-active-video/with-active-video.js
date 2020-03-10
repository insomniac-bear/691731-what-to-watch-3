import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Preview from '../../components/video-preview/video-preview.jsx';
import withVideo from '../with-video/with-video.js';

const VideoPreview = withVideo(Preview);

const withActiveVideo = (Component) => {
  class WithActiveVideo extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };
      this._onHover = this._onHover.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
      this._renderVideoPreview = this._renderVideoPreview.bind(this);
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

    _renderVideoPreview(filmPreview, posterUrl) {
      return (
        <VideoPreview
          isPlaying={this.state.isPlaying}
          filmPreview={filmPreview}
          posterUrl={posterUrl}
        />
      );
    }

    render() {
      return <Component
        {...this.props}
        onHover={this._onHover}
        onMouseOut={this._onMouseOut}
        renderVideoPreview={this._renderVideoPreview}
      />;
    }

    componentWillUnmount() {
      this._onHover = null;
      this._onMouseOut = null;
      this._renderVideoPreview = null;
      this.timerId = clearTimeout();
    }
  }

  WithActiveVideo.propTypes = {
    isPlaying: PropTypes.bool,
  };

  return WithActiveVideo;
};

export default withActiveVideo;
