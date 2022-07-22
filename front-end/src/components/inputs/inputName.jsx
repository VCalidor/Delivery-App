import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const NameInput = ({ testid }) => {
  const { name, setName } = useContext(AppContext);

  return (
    <input
      data-testid={ testid }
      type="text"
      placeholder="Digite o nome completo"
      value={ name }
      onChange={ ({ target: { value } }) => setName(value) }
    />
  );
};

export default NameInput;

NameInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
