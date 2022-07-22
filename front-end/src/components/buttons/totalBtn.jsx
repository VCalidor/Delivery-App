import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

function TotalBtn({ name, valueTestid, btnTestid }) {
  const navigate = useNavigate();
  const { cart } = useContext(AppContext);
  const totalValue = () => {
    if (!cart) return 0;
    const carArray = Object.values(cart);
    const value = carArray.reduce((prev, curr) => {
      const mult = curr.itemQty * (Number(curr.price) * 100);
      return mult + prev;
    }, 0);
    return (value / 100);
  };

  return (
    <button
      type="button"
      data-testid={ btnTestid }
      className="total-btn"
      disabled={ totalValue() === 0 }
      onClick={ () => { navigate('/customer/checkout'); } }
    >
      {`${name}: `}
      <span data-testid={ valueTestid }>
        { totalValue().toFixed(2).toString().replaceAll('.', ',') }
      </span>
    </button>
  );
}
TotalBtn.propTypes = {
  btnTestid: PropTypes.string.isRequired,
  valueTestid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TotalBtn;
