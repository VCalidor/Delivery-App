import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from '../errorMessage';
import EmailInput from '../inputs/inputEmail';
import PasswordInput from '../inputs/inputPassword';
import NameInput from '../inputs/inputName';
import TypeInput from '../inputs/inputType';
import SignUpBtn from '../buttons/btnSignUp';

const Card = ({
  emailTestid,
  passwordTestid,
  nameTestid,
  errorTestId,
  signUpTestid,
  admin,
}) => (
  <form>
    <NameInput testid={ nameTestid } />
    <EmailInput testid={ emailTestid } />
    <PasswordInput testid={ passwordTestid } />
    { admin && <TypeInput testid="admin_manage__select-role" /> }
    <ErrorMessage testid={ errorTestId } />
    <SignUpBtn testid={ signUpTestid } admin={ admin } />
  </form>
);

export default Card;

Card.propTypes = {
  emailTestid: PropTypes.string.isRequired,
  passwordTestid: PropTypes.string.isRequired,
  nameTestid: PropTypes.string.isRequired,
  errorTestId: PropTypes.string.isRequired,
  signUpTestid: PropTypes.string.isRequired,
  admin: PropTypes.bool,
};

Card.defaultProps = {
  admin: false,
};
