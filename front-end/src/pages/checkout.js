import React from 'react';
import AdressDetailsCard from '../components/cards/adressDetailsCheckoutCard';
import DetailsCard from '../components/cards/detailsCard';

function Checkout() {
  return (
    <main className="checkout">
      <DetailsCard
        className="details"
      />
      <AdressDetailsCard
        className="adress-details"
      />
    </main>
  );
}

export default Checkout;
