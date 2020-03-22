import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import PageHeader from '../page-header/page-header.jsx';
import {getPromoFilm} from '../../reducer/data/selectors.js';

const MovieCard = (props) => {
  const {promoFilm, activePageHandle} = props;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.filmName} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader activePageHandle={activePageHandle}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.filmName} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoFilm.filmName}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoFilm.genre}</span>
              <span className="movie-card__year">{promoFilm.release}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>;
};

MovieCard.propTypes = {
  promoFilm: PropTypes.shape().isRequired,
  activePageHandle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state),
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
