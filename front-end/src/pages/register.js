import React from 'react';
import Card from '../components/cards/registerCard';

function Register() {
  return (
    <main className="login">
      <Card
        nameTestid="common_register__input-name"
        emailTestid="common_register__input-email"
        passwordTestid="common_register__input-password"
        errorTestId="common_register__element-invalid_register"
        signUpTestid="common_register__button-register"
      />
    </main>
  );
}

export default Register;
