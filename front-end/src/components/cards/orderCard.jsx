import React from 'react';
import { Link } from 'react-router-dom';

const orderCard = ({
  id,
  status,
  saleDate,
  totalPrice,
  address,
  role,
  idDataTest,
  statDataTest,
  dateDataTest,
  priceDataTest,
  adressDataTest,
}) => (
  <Link to={ `/${role}/orders/${id}` }>
    <div>
      <div>
        <p>Pedido</p>
        <p data-testid={ idDataTest }>{ id }</p>
      </div>

      <div>
        <p data-testid={ statDataTest }>{ status }</p>
      </div>

      <div>
        <div>
          <p data-testid={ dateDataTest }>
            { new Date(saleDate).toLocaleDateString('pt-BR') }
          </p>
        </div>

        <div>
          <p data-testid={ priceDataTest }>
            { totalPrice.toString().replaceAll('.', ',') }
          </p>
        </div>
      </div>
    </div>

    {role === 'seller' && (
      <div>
        <p data-testid={ adressDataTest }>{ address }</p>
      </div>)}
  </Link>
);

export default orderCard;
