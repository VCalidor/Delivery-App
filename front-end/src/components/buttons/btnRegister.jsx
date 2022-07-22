import React from 'react';
import { Link } from 'react-router-dom';

const RegisterBtn = () => (
  <div>
    <Link to="/register">
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Registre-se
      </button>
    </Link>
  </div>
);

export default RegisterBtn;
