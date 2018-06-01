import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
// Routes
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import Billing from "./components/pages/billing";
import Sales from "./components/pages/sales";
import Purchase from "./components/pages/purchase";
import Inventory from "./components/pages/inventory";
import ProductListing from "./components/pages/productListing";
import TagEntry from "./components/pages/tagEntry";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="pageContent">
        <Route location={location} path="/" exact component={Login} />
        <Route location={location} path="/dashboard" exact component={Dashboard} />
        <Route location={location} path="/billings" exact component={Billing} />
        <Route location={location} path="/sales" exact component={Sales} />
        <Route location={location} path="/purchase" exact component={Purchase} />
        <Route location={location} path="/inventory" exact component={Inventory} />
        <Route location={location} path="/productlisting/:id" exact component={ProductListing} />
        <Route location={location} path="/tagentry/:id" exact component={TagEntry} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};

export default App;
