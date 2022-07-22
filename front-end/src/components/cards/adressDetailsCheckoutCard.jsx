import React, { useState, useEffect, useContext } from 'react';
import CheckoutBtn from '../buttons/btnCheckout';
import AdressInput from '../inputs/inputAdress';
import AdressNumberInput from '../inputs/inputAdressNumber';
import sellersRequest from '../../services/sellersRequest';
import AppContext from '../../context/appContext';

const AdressDetailsCard = () => {
  const { saleInfo, setSaleInfo } = useContext(AppContext);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      const users = await sellersRequest();
      setVendors(users);
    };
    fetchVendors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form>
      <select
        data-testid="customer_checkout__select-seller"
        onChange={ ({ target: { value } }) => {
          setSaleInfo({ ...saleInfo, sellerId: +value });
        } }
      >
        <option>
          Selecione o vendedor
        </option>

        { vendors.map((option) => (
          <option
            key={ option.id }
            value={ option.id }
          >
            { option.name }
          </option>
        ))}
      </select>

      <AdressInput
        testid="customer_checkout__input-address"
      />

      <AdressNumberInput
        testid="customer_checkout__input-addressNumber"
      />

      <CheckoutBtn
        testid="customer_checkout__button-submit-order"
      />

    </form>
  );
};

export default AdressDetailsCard;
