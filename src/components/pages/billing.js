import React, { Component } from 'react';

import Header from '../common/header';
import Table from '../common/table';
import Total from '../common/table';
import Cart from '../common/cart';

class Sales extends Component {
  render() {
    return (
      <div>
      	<Header title="Billing" icon="billing" />
      	<div className="container-small">
      		<Table />
          <Cart />
      	</div>
      </div>
    );
  }
}

export default Sales;
