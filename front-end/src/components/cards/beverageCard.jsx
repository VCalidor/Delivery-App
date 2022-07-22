import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';
import './beverageCard.css';

function BeverageCard({ price, urlImage, name, id }) {
  const [itemQty, setItemQty] = useState(0);
  const { cart, setCart } = useContext(AppContext);
  const increaseItemQty = () => {
    setItemQty(itemQty + 1);
    setCart({ ...cart, [id]: { id, name, itemQty: itemQty + 1, price } });
  };
  const decreaseItemQty = () => {
    if (itemQty === 0) return false;
    setItemQty(itemQty - 1);
    setCart({ ...cart, [id]: { id, name, itemQty: itemQty - 1, price } });
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const car = JSON.parse(localStorage.getItem('carrinho'));
    if (car && typeof car[id] === 'string') {
      setItemQty(0);
    }
    if (car && car[id]) {
      setItemQty(car[id].itemQty);
    }
  }, [id]);

  const manualSeting = ({ target: { value } }) => {
    if (value < 0) {
      setItemQty(0);
      setCart({ ...cart, [id]: { id, name, itemQty: 0, price } });
    } else {
      setItemQty(+value);
      setCart({ ...cart, [id]: { id, name, itemQty: value, price } });
    }
  };

  return (
    <section>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.toString().replaceAll('.', ',')}
      </p>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>
      <section>
        <button
          type="button"
          onClick={ decreaseItemQty }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          min="0"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ itemQty }
          onChange={ manualSeting }
        />
        <button
          type="button"
          onClick={ increaseItemQty }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </section>
    </section>
  );
}
BeverageCard.propTypes = {
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BeverageCard;
