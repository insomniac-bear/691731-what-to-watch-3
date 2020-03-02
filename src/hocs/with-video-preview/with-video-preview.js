import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import VideoPreview from '../../components/video-preview/video-preview.jsx';

const withVideoPreview = (Component) => {
  class WithVideoPreview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };
      this._onHoverHandler = this._onHoverHandler.bind(this);
    }

    _onHoverHandler() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    render() {
      return <Component
        {...this.props}
        onHoverHandler={this._onHoverHandler}
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

  WithVideoPreview.propTypes = {
    isPlaying: PropTypes.bool,
  };

  return WithVideoPreview;
};

export default withVideoPreview;
