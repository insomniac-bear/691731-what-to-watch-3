import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {ActivePage} from '../../reducer/genre/genre.js';
import {display} from '../../utils.js';

const formatNumber = (number) => {
  return number < 10 ? `0` + number : number;
};

const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time - hours * 3600 - minutes * 60);
  return (`${formatNumber(hours)}:${formatNumber(minutes)}: ${formatNumber(seconds)}`);
};

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._video = createRef();

    this.state = {
      isPlaying: true,
      videoDuration: 0,
      currentTime: 0,
    };
  }

  componentDidMount() {
    const {filmData} = this.props;
    const video = this._video.current;

    video.src = filmData.filmSrc;
    video.muted = false;
    video.play();
    video.ontimeupdate = () => {
      this.setState({
        currentTime: video.currentTime,
        videoDuration: video.duration,
      });
    };
  }

  componentDidUpdate() {
    const video = this._video.current;
    const {isPlaying} = this.state;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentWillUnmount() {
    const video = this._video.current;

    video.onPlay = null;
    video.ontimeupdate = null;
    video.src = ``;
    video.muted = false;
  }

  render() {
    const {filmData, activePageHandle} = this.props;
    return (
      <div
        className="player"
        onClick={() => this.setState({
          isPlaying: !this.state.isPlaying,
        })}
      >
        <video
          src={filmData.filmSrc}
          ref={this._video}
          className="player__video"
          poster={filmData.backgroundImage}
        />

        <button
          type="button"
          className="player__exit"
          onClick={() => activePageHandle(ActivePage.MAIN)}
        >
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: this.state.currentTime * 100 / this.state.videoDuration + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatTime(this.state.videoDuration)}</div>
          </div>

          <div className="player__controls-row">
            {display({
              isVisible: this.state.isPlaying,

              childrenTrue: <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>,

              childrenFalse: <button type="button" className="player__play">
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </button>,
            })}
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  filmData: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.array
  ]).isRequired,
  activePageHandle: PropTypes.func.isRequired,
};

export default Player;
