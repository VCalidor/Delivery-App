import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const AdressNumberInput = ({ testid }) => {
  const { setSaleInfo, saleInfo } = useContext(AppContext);

  return (
    <input
      data-testid={ testid }
      type="text"
      placeholder="Digite o número endereço de entrega"
      onChange={ ({ target: { value } }) => {
        setSaleInfo({ ...saleInfo, deliveryNumber: value });
      } }
    />
  );
};

export default AdressNumberInput;

AdressNumberInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
