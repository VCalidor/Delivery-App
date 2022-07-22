import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppContext from '../../context/appContext';

import './style.css';

const Header = ({ productsDataTestid, nameDataTestId, leaveDataTestId }) => {
  const navigate = useNavigate();
  const { userData: { role, name }, setCart } = useContext(AppContext);
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
          <button
            type="button"
            data-testid={ productsDataTestid }
            onClick={ () => {
              if (role === 'customer') navigate('/customer/products');
              if (role === 'seller') navigate('/seller/orders');
              if (role === 'administrator') navigate('/admin/manage');
            } }
          >
            { whichRole() }
          </button>
        }
        { role === 'customer' && (
          <button
            className="myProducts"
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/orders') }
          >
            Meus Pedidos
          </button>
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
