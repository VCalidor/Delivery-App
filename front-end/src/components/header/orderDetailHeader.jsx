import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import statusChangeRequest from '../../services/statusChangeRequest';
import sellersRequest from '../../services/sellersRequest';

function OrderDetailHeader({
  order,
  userData,
  orderDetail,
  orderIdDataTest,
  sellerNameDataTest,
  orderDateDataTest,
  orderStatusDataTest,
  deliveryCheckDataTest,
  dispatchCheckDataTest,
  preparingCheckDataTest,
}) {
  const [seller, setSeller] = useState(undefined);

  const onStatusChange = async (status) => {
    const { id } = order;
    const { token } = userData;

    await statusChangeRequest(id, status, token);

    await orderDetail();
  };

  const getSeller = useCallback(async () => {
    const sellers = await sellersRequest();

    const foundSeller = sellers?.find((s) => s.id === order.sellerId);
    setSeller(foundSeller.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order.sellerId, userData]);

  useEffect(() => {
    getSeller();
  }, [getSeller]);

  return (
    <section>
      <div>
        <p>
          Pedido
          <span data-testid={ orderIdDataTest }>{ order.id }</span>
        </p>
        <p>
          P. Vend:
          <span data-testid={ sellerNameDataTest }>{ seller }</span>
        </p>
        <p>
          Data:
          <span data-testid={ orderDateDataTest }>
            { new Date(order.saleDate).toLocaleDateString('pt-BR') }
          </span>
        </p>
        <p>
          Status:
          <span data-testid={ orderStatusDataTest }>{ order.status }</span>
        </p>
      </div>
      <div>
        { userData.role === 'seller' ? (
          <>
            <button
              disabled={ order.status !== 'Pendente' }
              data-testid={ preparingCheckDataTest }
              type="button"
              onClick={ () => onStatusChange('Preparando') }
            >
              Preparar pedido
            </button>
            <button
              disabled={ order.status !== 'Preparando' }
              data-testid={ dispatchCheckDataTest }
              type="button"
              onClick={ () => onStatusChange('Em Trânsito') }
            >
              Saiu para entrega
            </button>
          </>
        ) : (
          <button
            disabled={ order.status !== 'Em Trânsito' }
            data-testid={ deliveryCheckDataTest }
            type="button"
            onClick={ () => onStatusChange('Entregue') }
          >
            Marcar como entregue
          </button>
        )}
      </div>
    </section>
  );
}

OrderDetailHeader.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sellerId: PropTypes.number.isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  orderDetail: PropTypes.func.isRequired,
  orderIdDataTest: PropTypes.string.isRequired,
  sellerNameDataTest: PropTypes.string.isRequired,
  orderDateDataTest: PropTypes.string.isRequired,
  orderStatusDataTest: PropTypes.string.isRequired,
  deliveryCheckDataTest: PropTypes.string.isRequired,
  dispatchCheckDataTest: PropTypes.string.isRequired,
  preparingCheckDataTest: PropTypes.string.isRequired,
};

export default OrderDetailHeader;
