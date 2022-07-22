import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/cards/loginCard';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data && data.token && data.role === 'customer') {
      navigate('/customer/products');
    }
  }, []);

  return (
    <main className="login">
      <Card
        emailTestid="common_login__input-email"
        passwordTestid="common_login__input-password"
        errorTestId="common_login__element-invalid-email"
      />
    </main>
  );
}

export default Login;
