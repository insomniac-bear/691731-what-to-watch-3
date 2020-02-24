import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPreview extends PureComponent {
  constructor(props) {
    super(props);

    this._video = createRef();
    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const {filmPreview} = this.props;
    const video = this._video.current;

    video.src = filmPreview;
    video.muted = true;

    video.onPlay = () => {
      this.setState({
        isPlaying: true,
      });
    };
  }

  componentDidUpdate() {
    const video = this._video.current;
    const {isPlaying} = this.props;

    if (isPlaying !== this.state.isPlaying) {
      this.setState({isPlaying}, () => {
        if (isPlaying) {
          video.play();
        } else {
          video.load();
        }
      });
    }
  }

  componentWillUnmount() {
    const video = this._video.current;

    video.onPlay = null;
    video.src = ``;
    video.muted = false;
  }

  render() {
    const {filmPreview, posterUrl} = this.props;

    return (
      <React.Fragment>
        <video
          poster={posterUrl}
          ref={this._video}
          src={filmPreview}
          width="280"
          height="175"
        />
      </React.Fragment>
    );
  }
}


VideoPreview.propTypes = {
  filmPreview: PropTypes.string,
  posterUrl: PropTypes.string,
  isPlaying: PropTypes.bool,
};

export default VideoPreview;
