import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../common/header';
import IconBilling from '../../assets/icon-billing.png';

class Dashboard extends Component {
  render() {
    return (
      <div>
      	<Header title="Dashboard" icon="billing" />
      	<div className="container">
          <h1>Dashboard</h1>
          <ul className="menuModifier clearfix">
            <li>
              <Link to="/billings">
                <img src={IconBilling} alt="Title" />
                <h3>Billing</h3>
              </Link>
            </li>
            <li>
              <Link to="/purchase">
                <img src={IconBilling} alt="Title" />
                <h3>Purchases</h3>
              </Link>
            </li>
            <li>
              <Link to="/inventory">
                <img src={IconBilling} alt="Title" />
                <h3>Inventory</h3>
              </Link>
            </li>
            <li>
              <Link to="/billing">
                <img src={IconBilling} alt="Title" />
                <h3>Saving</h3>
              </Link>
            </li>
            <li>
              <Link to="/billing">
                <img src={IconBilling} alt="Title" />
                <h3>Customer</h3>
              </Link>
            </li>
            <li>
              <Link to="/billing">
                <img src={IconBilling} alt="Title" />
                <h3>Operator</h3>
              </Link>
            </li>
            <li>
              <Link to="/billing">
                <img src={IconBilling} alt="Title" />
                <h3>Reports</h3>
              </Link>  
            </li>
            <li>
              <Link to="/billing">
                <img src={IconBilling} alt="Title" />
                <h3>Masters</h3>
              </Link>  
            </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Dashboard;