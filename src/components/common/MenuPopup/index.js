import React from 'react';
import IconBilling from '../../../assets/icon-billing.png';

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    closeMenu(id,e) {
        this.props.closeMenu(id)
    }
    render() {
        const Url = window.location.href
        const SameUrl = Url.substr(Url.lastIndexOf('/') - 0);
        return <ul className="menuOverlay">
            <li onClick={this.closeMenu.bind(this, '/billings')} className={SameUrl === '/billings' ? 'active': null}>
            	<img src={IconBilling} alt="Title" />
            	<h3>Billing</h3>
            </li>
            <li onClick={this.closeMenu.bind(this, '/purchase')} className={SameUrl === '/purchase' ? 'active': null}>
            	<img src={IconBilling} alt="Title" />
            	<h3>Purchases</h3>
            </li>
            <li onClick={this.closeMenu.bind(this, '/inventory')} className={SameUrl === '/inventory' ? 'active': null}>
            	<img src={IconBilling} alt="Title" />
            	<h3>Inventory</h3>
            </li>
            <li>
            	<img src={IconBilling} alt="Title" />
            	<h3>Saving</h3>
            </li>
            <li>
            	<img src={IconBilling} alt="Title" />
            	<h3>Customer</h3>
            </li>
            <li>
            	<img src={IconBilling} alt="Title" />
            	<h3>Operator</h3>
            </li>
            <li>
                <img src={IconBilling} alt="Title" />
                <h3>Reports</h3>
            </li>
            <li>
                <img src={IconBilling} alt="Title" />
                <h3>Masters</h3>
            </li>
        </ul>
    }
}

export default Menu;
