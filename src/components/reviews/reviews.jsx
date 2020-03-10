import React from 'react';
import PropTypes from 'prop-types';

const Reviews = (props) => {
  const {comments} = props;

  const commentsFirstCol = (comments.length > 1) ? comments.slice(0, Math.ceil(comments.length / 2)) : [].concat(comments);
  const commentsSecondCol = (comments.length > 1) ? comments.slice(Math.ceil(comments.length / 2), comments.length) : [];

  return <React.Fragment>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsFirstCol.map((comment) => {
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
        })}
      </div>
      <div className="movie-card__reviews-col">
        {commentsSecondCol.map((comment) => {
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
        })}
      </div>
    </div>
  </React.Fragment>;
};

Reviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

export default Reviews;
