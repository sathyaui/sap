import React, { Component } from 'react';

import Header from '../common/header';
import Table from '../common/table';
import Total from '../common/table';

class Sales extends Component {
  render() {
    return (
      <div>
      	<Header title="Billing" icon="billing" />
      	<div className="container-small">
      		<Table />
      	</div>
      </div>
    );
  }
}

export default Sales;
