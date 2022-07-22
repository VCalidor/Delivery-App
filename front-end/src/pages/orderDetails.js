import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../context/appContext';
import Header from '../components/header/header';
import CheckoutTableDescription from '../components/table/tableCheckoutDescription';
import OrderDetailHeader from '../components/header/orderDetailHeader';
import orderByIdRequest from '../services/orderByIdRequest';

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const { setUserData, userData } = useContext(AppContext);

  const isLogged = useCallback(() => {
    const getUserFromStorage = JSON.parse(localStorage.getItem('user'));

    if (getUserFromStorage.role && getUserFromStorage.name && getUserFromStorage.token) {
      setUserData(getUserFromStorage);
    } else {
      navigate('/login');
    }
  }, [setUserData, navigate]);

  const orderDetails = useCallback(async () => {
    const getOrder = await orderByIdRequest(id);

    setOrder(getOrder);
  }, [id]);

  useEffect(() => {
    isLogged();
    orderDetails();
  }, [isLogged, orderDetails]);

  const { role } = userData;

  return (
    <div>
      <Header
        leaveDataTestId="customer_products__element-navbar-link-logout"
        nameDataTestId="customer_products__element-navbar-user-fuwwwwll-name"
        productsDataTestid="customer_products__element-navbar-link-products"
      />
      {(order.products)
      && (
        <main>
          <h3>Detalhes do pedido</h3>
          <OrderDetailHeader
            order={ order }
            userData={ userData }
            orderDetail={ orderDetails }
            orderIdDataTest={
              `${role}_order_details__element-order-details-label-order-id`
            }
            sellerNameDataTest={
              `${role}_order_details__element-order-details-label-seller-name`
            }
            orderDateDataTest={
              `${role}_order_details__element-order-details-label-order-date`
            }
            orderStatusDataTest={
              `${role}_order_details__element-order-details-label-delivery-status`
            }
            deliveryCheckDataTest={
              `${role}_order_details__button-delivery-check`
            }
            dispatchCheckDataTest={
              `${role}_order_details__button-dispatch-check`
            }
            preparingCheckDataTest={
              `${role}_order_details__button-preparing-check`
            }
          />
          <CheckoutTableDescription
            removeItem={ false }
            items={ order.products }
            pagetype="order_details"
          />
          <p
            data-testid={ `${role}_order_details__element-order-total-price` }
          >
            Total:
            { ` R$ ${order.totalPrice.replace('.', ',')}` }
          </p>
        </main>
      )}
    </div>
  );
}

export default OrderDetails;
