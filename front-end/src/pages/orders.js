import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import AppContext from '../context/appContext';
import Card from '../components/cards/orderCard';
import salesRequest from '../services/salesRequest';

function Orders() {
  const { userData, setUserData } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const isLogged = useCallback(() => {
    const getUserFromStorage = JSON.parse(localStorage.getItem('user'));

    if (getUserFromStorage.role && getUserFromStorage.name && getUserFromStorage.token) {
      setUserData(getUserFromStorage);
    } else {
      navigate('/login');
    }
  }, [setUserData, navigate]);

  const fetchSales = useCallback(async () => {
    if (userData.token) {
      const saleData = await salesRequest(userData.token);

      setOrders(saleData);
    }
  }, [userData.token]);

  useEffect(() => {
    isLogged();
    fetchSales();
  }, [isLogged, fetchSales]);

  return (
    <main>
      <Header
        leaveDataTestId="customer_products__element-navbar-link-logout"
        nameDataTestId="customer_products__element-navbar-user-full-name"
        productsDataTestid={ userData.role === 'customer'
          ? 'customer_products__element-navbar-link-products'
          : 'customer_products__element-navbar-link-orders' }
      />
      <section className="order__container">
        {
          userData && orders.map((o, index) => (
            <Card
              id={ o.id }
              status={ o.status }
              idDataTest={ `${userData.role}_orders__element-order-id-${o.id}` }
              statDataTest={ `${userData.role}_orders__element-delivery-status-${o.id}` }
              dateDataTest={ `${userData.role}_orders__element-order-date-${o.id}` }
              priceDataTest={ `${userData.role}_orders__element-card-price-${o.id}` }
              adressDataTest={ `seller_orders__element-card-address-${o.id}` }
              role={ userData.role }
              key={ index }
              saleDate={ o.saleDate }
              totalPrice={ o.totalPrice }
              address={ `${o.deliveryAddress}, ${o.deliveryNumber}` }
            />
          ))
        }
      </section>
    </main>
  );
}

export default Orders;
