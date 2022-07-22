import React from 'react';
import PropTypes from 'prop-types';
import LoginBtn from '../buttons/btnLogin';
import RegisterBtn from '../buttons/btnRegister';
import ErrorMessage from '../errorMessage';
import EmailInput from '../inputs/inputEmail';
import PasswordInput from '../inputs/inputPassword';

const Card = ({ emailTestid, passwordTestid, errorTestId }) => (
  <form>
    <EmailInput testid={ emailTestid } />
    <PasswordInput testid={ passwordTestid } />
    <LoginBtn />
    <ErrorMessage testid={ errorTestId } />
    <RegisterBtn />
  </form>
);

export default Card;

Card.propTypes = {
  emailTestid: PropTypes.string.isRequired,
  passwordTestid: PropTypes.string.isRequired,
  errorTestId: PropTypes.string.isRequired,
};
