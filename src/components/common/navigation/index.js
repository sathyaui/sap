import React from 'react';
import BurgerIcon from './burgerMenu';
import IconBilling from '../../../assets/icon-billing.png';
import IconSales from '../../../assets/sales-icon.png'

const Navigation = ({title, icon}) => (
  <nav>
    {icon === "billing" && <img src={IconBilling} alt={title} />}
    {icon === "sales" && <img src={IconSales} alt={title} />}
    <h3>{title}</h3>
    <BurgerIcon />
  </nav>
);

export default Navigation;
