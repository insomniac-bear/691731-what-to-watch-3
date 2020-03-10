import React from 'react';
import PropTypes from 'prop-types';

const CatalogMoreButton = (props) => {
  const {onClickCatalogButton} = props;
  return <React.Fragment>
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickCatalogButton}
      >
        Show more
      </button>
    </div>
  </React.Fragment>;
};

CatalogMoreButton.propTypes = {
  onClickCatalogButton: PropTypes.func.isRequired,
};

export default CatalogMoreButton;
