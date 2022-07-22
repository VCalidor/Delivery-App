import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const TypeInput = ({ testid }) => {
  const { role, setRole } = useContext(AppContext);

  return (
    <select
      onChange={ ({ target: { value } }) => setRole(value) }
      value={ role }
      name="type"
      id="type"
      data-testid={ testid }
    >
      <option selected value="customer">Cliente</option>
      <option value="seller">Vendedor</option>
      <option value="administrator">Administrador</option>
    </select>
  );
};

export default TypeInput;

TypeInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
