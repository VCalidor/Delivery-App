import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/appContext';

const ErrorMessage = ({ testid }) => {
  const { fetchError } = useContext(AppContext);

  return (
    <p
      data-testid={ testid }
    >
      { fetchError.status !== undefined ? fetchError.data.message : '' }
    </p>
  );
};

ErrorMessage.propTypes = {
  testid: PropTypes.string.isRequired,
};

export default ErrorMessage;
