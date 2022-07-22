import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CheckoutItems from './tableCheckoutItems';
import AppContext from '../../context/appContext';

function CheckoutTableDescription({
  removeItem = true, items = [], pagetype = 'checkout' }) {
  const { setSaleInfo, saleInfo, cart } = useContext(AppContext);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(items.reduce((acc, curr) => acc + (Number(curr.price)
     * Number(curr.itemQty)), 0));
    setSaleInfo({ ...saleInfo, totalPrice: Number(totalValue.toFixed(2)) });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, totalValue]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            { removeItem && (
              <th>Remover Item</th>
            )}
          </tr>
        </thead>
        <tbody>
          { items.map((item, i) => (
            <CheckoutItems
              i={ i }
              removeItem={ removeItem }
              item={ item }
              key={ item.id }
              pagetype={ pagetype }
            />))}
        </tbody>
      </table>
      { pagetype === 'checkout' && (
        <p data-testid="customer_checkout__element-order-total-price">
          { totalValue.toFixed(2).toString().replace('.', ',') }
        </p>
      )}
    </>
  );
}

export default CheckoutTableDescription;

CheckoutTableDescription.propTypes = {
  removeItem: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pagetype: PropTypes.string.isRequired,
};
