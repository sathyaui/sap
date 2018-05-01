import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import Header from '../common/header';
import PurchaseList from './Inventory/List';

class Inventory extends Component {
  componentDidMount() {
    this.props.fetchPurchaseTagList();
  }
  render() {
    const { purchaseList, dealers } = this.props;
    return (
      <div>
      	<Header title="Inventory" icon="sales" />
      	<div className="container">
          {!isEmpty(purchaseList) && <PurchaseList data={purchaseList} dealers={dealers} />}
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    purchaseList:state.purchaseTagList.data,
    dealers:state.dealer.dealerList,
  }
}

export default connect(mapStateToProps, {fetchPurchaseTagList})(Inventory);
