import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

import './style.css';

const Header = ({ productsDataTestid, nameDataTestId, leaveDataTestId }) => {
  const navigate = useNavigate();
  const { userData: { role, name }, setCart } = useContext(AppContext);
  const route = () => {
    if (role === 'customer') return '/customer/products';
    if (role === 'seller') return '/seller/orders';
    if (role === 'administrator') return '/admin/manage';
  };
  const whichRole = () => {
    if (role === 'customer') return 'Produtos';
    if (role === 'seller') return 'Pedidos';
    if (role === 'administrator') return 'Gerenciar usuários';
    // navigate('/login');
  };
  const logOut = () => {
    localStorage.clear();
    setCart({});
    navigate('/login');
  };

  return (
    <nav className="header">
      <div className="left-side">
        {
          <a
            data-testid={ productsDataTestid }
            href={ route() }
          >
            { whichRole() }
          </a>
        }
        { role === 'customer' && (
          <a
            href="/customer/orders"
            className="myProducts"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus Pedidos
          </a>
        )}
      </div>
      <div className="right-side">
        <button type="button" data-testid={ nameDataTestId }>{ name }</button>
        <button
          type="button"
          data-testid={ leaveDataTestId }
          onClick={ logOut }
        >
          Sair
        </button>
      </div>
    </nav>
  );
};

Header.propTypes = {
  productsDataTestid: PropTypes.string.isRequired,
  nameDataTestId: PropTypes.string.isRequired,
  leaveDataTestId: PropTypes.string.isRequired,
};

export default Header;
