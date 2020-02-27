import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (date) => {
  const MONTH_NAME = [`Janyary`, `Febrary`, `March`, `April`, `May`, `June`, `July`, `Augest`, `September`, `October`, `November`, `December`];
  const parseDate = date.split(`-`);
  return `${MONTH_NAME[parseDate[1] - 1]} ${parseDate[2]}, ${parseDate[0]}`;
};

const Reviews = (props) => {
  const {comments} = props;

  const commentsFirstCol = (comments.length > 1) ? comments.slice(0, Math.ceil(comments.length / 2)) : [].concat(comments);
  const commentsSecondCol = (comments.length > 1) ? comments.slice(Math.ceil(comments.length / 2), comments.length) : [];

  return <React.Fragment>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {commentsFirstCol.map((comment, index) => {
          return <div className="review" key={comment.author + index}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.textComment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.author}</cite>
                <time className="review__date" dateTime={comment.date}>{formatDate(comment.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{comment.rating}</div>
          </div>;
        })}
      </div>
      <div className="movie-card__reviews-col">
        {commentsSecondCol.map((comment, index) => {
          return <div className="review" key={comment.author + index}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.textComment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.author}</cite>
                <time className="review__date" dateTime={comment.date}>{formatDate(comment.date)}</time>
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    textComment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};

export default Reviews;
