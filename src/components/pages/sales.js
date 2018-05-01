import React, { Component } from 'react';

import Header from '../common/header';
import Table from '../common/table';

class Sales extends Component {
  render() {
    return (
      <div>
      	<Header title="Sales" icon="sales" />
      	<div className="container-small">
      		<Table />
      	</div>
      </div>
    );
  }
}

export default Sales;
