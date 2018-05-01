import React from 'react';
import IconBilling from '../../../assets/icon-billing.png';

const Menu = () => (
  <ul className="menuOverlay">
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Billing</h3>
    </li>
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Purchases</h3>
    </li>
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Inventory</h3>
    </li>
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Saving</h3>
    </li>
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Return</h3>
    </li>
    <li>
    	<img src={IconBilling} alt="Title" />
    	<h3>Stock</h3>
    </li>
    <li>
        <img src={IconBilling} alt="Title" />
        <h3>Balance</h3>
    </li>
  </ul>
)

export default Menu;
