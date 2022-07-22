import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

const AdressInput = ({ testid }) => {
  const { setSaleInfo, saleInfo } = useContext(AppContext);

  return (
    <input
      data-testid={ testid }
      type="text"
      placeholder="Digite o endereço de entrega"
      onChange={ ({ target: { value } }) => setSaleInfo(
        { ...saleInfo, deliveryAddress: value },
      ) }
    />
  );
};

export default AdressInput;

AdressInput.propTypes = {
  testid: PropTypes.string.isRequired,
};
