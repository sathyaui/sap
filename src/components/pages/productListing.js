import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import Header from '../common/header';
import List from './Inventory/products';

class ProductListing extends Component {
  state = {
    open:false,
  };
  componentDidMount() {
    this.props.fetchPurchaseTagList();
  }
  requestClose = () => {
    this.setState({
      open:false,
    });
  };
  editItem = () => {
    this.setState({
      open:!this.state.open,
    });
  };
  render() {
    const { purchaseList, dealers, products } = this.props;
    return (
      <div>
      	<Header title="Inventory" icon="sales" />
      	<div className="container">
          {!isEmpty(purchaseList) && <List data={purchaseList} products={products} dealers={dealers} paramId={this.props.match.params.id} editItem={this.editItem} />}
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    purchaseList:state.purchaseTagList.data,
    products:state.product.productLst,
    dealers:state.dealer.dealerList,
  }
}

ProductListing.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {fetchPurchaseTagList})(ProductListing);
