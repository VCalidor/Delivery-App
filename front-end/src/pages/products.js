import React, { useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TotalBtn from '../components/buttons/totalBtn';
import Card from '../components/cards/beverageCard';
import Header from '../components/header/header';
import AppContext from '../context/appContext';
import productsRequest from '../services/productsRequest';

import './products.css';

function Products() {
  const { products, setProducts, setUserData, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const isLogged = useCallback(() => {
    const getUserFromStorage = JSON.parse(localStorage.getItem('user'));

    if (getUserFromStorage.role && getUserFromStorage.name && getUserFromStorage.token) {
      setUserData(getUserFromStorage);
    } else {
      navigate('/login');
    }
  }, [setUserData, navigate]);

  const fetchProducts = useCallback(async () => {
    const data = await productsRequest();

    setProducts(data);
  }, [setProducts]);

  const roleCheck = useCallback(() => {
    if (userData.role) {
      if (userData.role === 'seller') {
        navigate('/seller/orders');
      }
      if (userData.role === 'administrator') {
        navigate('/admin/manage');
      }
    }
  }, [navigate, userData.role]);

  useEffect(() => {
    isLogged();
    roleCheck();
    fetchProducts();
  }, [isLogged, roleCheck, fetchProducts]);

  return (

    <main className="products">
      <Header
        leaveDataTestId="customer_products__element-navbar-link-logout"
        nameDataTestId="customer_products__element-navbar-user-full-name"
        productsDataTestid="customer_products__element-navbar-link-products"
      />
      <section className="products__container">
        {
          products.map((product, index) => (
            <Card
              id={ product.id }
              key={ index }
              name={ product.name }
              price={ product.price }
              urlImage={ product.urlImage }
            />
          ))
        }
      </section>
      <TotalBtn
        // disabled={ totalValue }
        name="Ver carrinho"
        valueTestid="customer_products__checkout-bottom-value"
        btnTestid="customer_products__button-cart"
      />
    </main>
  );
}

export default Products;
