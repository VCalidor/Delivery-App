import React from 'react';
import Card from '../components/cards/loginCard';

function Login() {
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
