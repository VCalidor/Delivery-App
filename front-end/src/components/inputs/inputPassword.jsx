import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const PasswordInput = ({ testid }) => {
  const { password, setPassword } = useContext(AppContext);

  return (
    <input
      data-testid={ testid }
      type="password"
      placeholder="Digite a senha"
      value={ password }
      onChange={ ({ target: { value } }) => setPassword(value) }
    />
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
