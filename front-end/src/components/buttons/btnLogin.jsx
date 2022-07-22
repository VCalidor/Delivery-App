import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/appContext';
import loginRequest from '../../services/loginRequest';

const SIX = 6;

const LoginBtn = () => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const {
    email,
    password,
    setUserData,
    setFetchError,
    setEmail,
    setPassword,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const isValid = () => (regex.test(email)) && (password.length >= SIX);
  const toLog = async () => {
    try {
      const { user, token } = await loginRequest(email, password);
      setUserData(user);
      localStorage.setItem('user', JSON.stringify({ ...user, token }));

      if (user.role === 'customer') navigate('/customer/products');
      if (user.role === 'seller') navigate('/seller/orders');
      if (user.role === 'administrator') navigate('/admin/manage');

      setEmail('');
      setPassword('');
    } catch (error) {
      setFetchError(error.response);
    }
  };

  return (
    <button
      data-testid="common_login__button-login"
      type="button"
      disabled={ !isValid() }
      onClick={ () => toLog() }
    >
      Login
    </button>
  );
};

export default LoginBtn;
