import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCommentsToFilm} from '../../reducer/data/selectors';

const commentMarkup = (comment) => {
  return <div className="review" key={comment.id}>
    <blockquote className="review__quote">
      <p className="review__text">{comment.comment}</p>
      <footer className="review__details">
        <cite className="review__author">{comment.user.name}</cite>
        <time className="review__date" dateTime={comment.date}>{comment.date}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{comment.rating}</div>
  </div>;
};

const Reviews = (props) => {
  const {commentsToFilm} = props;

  const commentsFirstCol = (commentsToFilm.length > 1) ? commentsToFilm.slice(0, Math.ceil(commentsToFilm.length / 2)) : [].concat(commentsToFilm);
  const commentsSecondCol = (commentsToFilm.length > 1) ? commentsToFilm.slice(Math.ceil(commentsToFilm.length / 2), commentsToFilm.length) : [];

  return <React.Fragment>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsFirstCol.map((comment) => commentMarkup(comment))}
      </div>
      <div className="movie-card__reviews-col">
        {commentsSecondCol.map((comment) => commentMarkup(comment))}
      </div>
    </div>
  </React.Fragment>;
};

Reviews.propTypes = {
  commentsToFilm: PropTypes.arrayOf(PropTypes.shape()),
};

const mapStateToProps = (state) => ({
  commentsToFilm: getCommentsToFilm(state),
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
