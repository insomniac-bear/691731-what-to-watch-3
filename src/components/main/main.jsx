import React from 'react';
import PropTypes from 'prop-types';

import CatalogMoreButton from '../catalog-more-button/catalog-more-button.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import {display} from '../../utils.js';


const Main = (props) => {
  const {
    currentFilmsCount,
    showedFilmsCount,
    onChangeShowedFilmsCount,
  } = props;

  return <React.Fragment>
    <MovieCard />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <MoviesList
        />

        {
          display(
              {
                isVisible: showedFilmsCount < currentFilmsCount,
                childrenTrue: <CatalogMoreButton onClickCatalogButton={onChangeShowedFilmsCount}/>,
                childrenFalse: null,
              }
          )
        }
      </section>
      <PageFooter />
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  showedFilmsCount: PropTypes.number.isRequired,
  currentFilmsCount: PropTypes.number.isRequired,
  onChangeShowedFilmsCount: PropTypes.func.isRequired,
};

export default Main;
