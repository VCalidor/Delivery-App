import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';
import saleRequest from '../../services/saleRequest';

const THREE = 3;
const ONE = 1;

const CheckoutBtn = ({ testid }) => {
  const navigate = useNavigate();
  const { saleInfo, setSaleInfo, setCart } = useContext(AppContext);

  const completePurchase = async () => {
    try {
      const response = await saleRequest(saleInfo);
      setSaleInfo(
        { totalPrice: 0, sellerId: null, deliveryAddress: '', deliveryNumber: '' },
      );
      localStorage.setItem('carrinho', JSON.stringify({}));
      setCart({});
      if (response) {
        navigate(`/customer/orders/${response.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        data-testid={ testid }
        type="button"
        onClick={ completePurchase }
        disabled={
          !saleInfo.sellerId
          || saleInfo.deliveryAddress.length < THREE
          || saleInfo.deliveryNumber.length < ONE
        }
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default CheckoutBtn;

CheckoutBtn.propTypes = {
  testid: PropTypes.string.isRequired,
};
