import React from 'react';
import PropTypes from 'prop-types';
import ReviewBtn from '../review-btn/review-btn.jsx';
import {display} from '../../utils.js';
import {ActivePage} from '../../reducer/genre/genre.js';

const MovieCardButtons = (props) => {
  const {activePageHandle, isReview} = props;
  return (
    <React.Fragment>
      <div className="movie-card__buttons">
        <button
          className="btn btn--play  movie-card__button"
          type="button"
          onClick={() => activePageHandle(ActivePage.PLAYER)}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list  movie-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
        </button>
        {
          display(
              {
                isVisible: isReview,
                childrenTrue: <ReviewBtn />,
                childrenFalse: null,
              }
          )
        }
      </div>
    </React.Fragment>);
};

MovieCardButtons.propTypes = {
  activePageHandle: PropTypes.func.isRequired,
  isReview: PropTypes.bool.isRequired,
};

export default MovieCardButtons;
