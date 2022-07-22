import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const EmailInput = ({ testid }) => {
  const { email, setEmail } = useContext(AppContext);

  return (
    <input
      data-testid={ testid }
      type="email"
      placeholder="Digite o email"
      value={ email }
      onChange={ ({ target: { value } }) => setEmail(value) }
    />
  );
};

export default EmailInput;

EmailInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
