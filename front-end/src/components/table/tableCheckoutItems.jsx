import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

function CheckoutItems({ item, pagetype = 'checkout', i, removeItem }) {
  const { cart, setCart, userData } = useContext(AppContext);
  const { role } = userData;
  const deleteItem = (id) => {
    const cartCopy = { ...cart };
    delete cartCopy[id];
    setCart(cartCopy);
    localStorage.setItem('carrinho', JSON.stringify(cartCopy));
  };

  return (
    <tr>
      <td
        data-testid={
          `${role}_${pagetype}__element-order-table-item-number-${i}`
        }
      >
        { i + 1 }
      </td>
      <td
        data-testid={
          `${role}_${pagetype}__element-order-table-name-${i}`
        }
      >
        { item.name }
      </td>
      <td
        data-testid={ `${role}_${pagetype}__element-order-table-quantity-${i}` }
      >
        { (pagetype === 'checkout') ? item.itemQty : item.salesProduct.quantity }
      </td>
      <td
        data-testid={ `${role}_${pagetype}__element-order-table-unit-price-${i}` }
      >
        { Number(item.price).toFixed(2).toString().replace('.', ',') }
      </td>
      <td
        data-testid={ `${role}_${pagetype}__element-order-table-sub-total-${i}` }
      >
        { (pagetype === 'checkout')
          ? (item.itemQty * +item.price).toFixed(2).toString().replace('.', ',')
          : (item.salesProduct.quantity * item.price)
            .toFixed(2).toString().replace('.', ',')}
      </td>
      { removeItem && (
        <td>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${i}` }
            onClick={ () => deleteItem(item.id) }
          >
            Remover
          </button>
        </td>)}
    </tr>
  );
}

export default CheckoutItems;

CheckoutItems.propTypes = {
  item: PropTypes.shape().isRequired,
  pagetype: PropTypes.string.isRequired,
  i: PropTypes.number.isRequired,
  removeItem: PropTypes.bool.isRequired,
};
