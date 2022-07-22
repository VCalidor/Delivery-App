import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('customer');
  const [userData, setUserData] = useState({});
  const [fetchError, setFetchError] = useState({});
  const [products, setProducts] = useState([]);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [saleInfo, setSaleInfo] = useState(
    { sellerId: null, deliveryAddress: '', deliveryNumber: '', totalPrice: 0 },
  );

  const [cart, setCart] = useState(localStorage.getItem('carrinho')
    ? JSON.parse(localStorage.getItem('carrinho')) : {});

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    userData,
    setUserData,
    fetchError,
    setFetchError,
    name,
    setName,
    role,
    setRole,
    products,
    setProducts,
    cart,
    setCart,
    checkoutItems,
    setCheckoutItems,
    saleInfo,
    setSaleInfo,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default Provider;
