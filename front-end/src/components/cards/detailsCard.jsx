import React, { useContext } from 'react';
import CheckoutTableDescription from '../table/tableCheckoutDescription';
import AppContext from '../../context/appContext';

const DetailsCard = () => {
  const { cart } = useContext(AppContext);

  return (
    <main>
      <CheckoutTableDescription
        removeItem
        items={ Object.values(cart) }
        pagetype="checkout"
      />
    </main>
  );
};

export default DetailsCard;
