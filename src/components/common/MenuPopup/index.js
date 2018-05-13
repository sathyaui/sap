import React from 'react';
import IconBilling from '../../../assets/icon-billing.png';

class Menu extends React.Component {
    closeMenu(id) {
        this.props.closeMenu(id)
    }
    render() {
        return <ul className="menuOverlay">
            <li onClick={this.closeMenu.bind(this, '/billings')}>
            	<img src={IconBilling} alt="Title" />
            	<h3>Billing</h3>
            </li>
            <li onClick={this.closeMenu.bind(this, '/purchase')}>
            	<img src={IconBilling} alt="Title" />
            	<h3>Purchases</h3>
            </li>
            <li onClick={this.closeMenu.bind(this, '/inventory')}>
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
    }
}

export default Menu;
