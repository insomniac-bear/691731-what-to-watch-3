import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../movies-list/movies-list.jsx';
import Tabs from '../tabs/tabs.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import PageHeader from '../page-header/page-header.jsx';

import withActiveTab from '../../hocs/with-active-tab/with-active-tab.js';

const TabsWrapped = withActiveTab(Tabs);

const MoviePage = (props) => {
  const {
    filmData,
    activePageHandle,
  } = props;
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{background: filmData.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={filmData.posterImage} alt={filmData.filmName} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader
            activePageHandle={activePageHandle}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmData.filmName}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmData.genre}</span>
                <span className="movie-card__year">{filmData.release}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play  movie-card__button" type="button">
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
                <a href="add-review.html" className="btn  movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap  movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster  movie-card__poster--big">
              <img src={filmData.backgroundImage} alt={filmData.filmName} width="218" height="327" />
            </div>

            <TabsWrapped
              filmData={filmData}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            activePageHandle={activePageHandle}
          />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  filmData: PropTypes.shape().isRequired,
  activePageHandle: PropTypes.func.isRequired,
};

export default MoviePage;
