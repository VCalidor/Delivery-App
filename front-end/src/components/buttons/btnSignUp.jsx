import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/appContext';
import signUpRequest from '../../services/signUpRequest';
import signUpByAdminRequest from '../../services/signUpByAdminRequest';
import loginRequest from '../../services/loginRequest';

const SIX = 6;
const TWELVE = 12;

const SignUp = ({ admin, testid }) => {
  const navigate = useNavigate();
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    role,
    setRole,
    setFetchError,
    setUserData,
  } = useContext(AppContext);

  const isValid = () => (regex.test(email)) && (password.length >= SIX)
  && (name.length >= TWELVE);

  const toSignUp = async () => {
    try {
      if (admin) {
        const { token } = JSON.parse(localStorage.getItem('user'));

        await signUpByAdminRequest({ email, password, name, role }, token);
      } else {
        await signUpRequest(email, password, name);
        const data = await loginRequest(email, password);
        setUserData(data.user);
        localStorage.setItem('user', JSON.stringify({ ...data.user, token: data.token }));
        navigate('/customer/products');
      }

      setName('');
      setEmail('');
      setPassword('');
      setRole('customer');
      setFetchError('');
    } catch (error) {
      setFetchError(error.response);
    }
  };

  return (
    <button
      data-testid={ testid }
      type="button"
      disabled={ !isValid() }
      onClick={ () => toSignUp() }
    >
      SignUp
    </button>
  );
};

SignUp.propTypes = {
  admin: PropTypes.bool,
  testid: PropTypes.string.isRequired,
};

SignUp.defaultProps = {
  admin: false,
};

export default SignUp;
