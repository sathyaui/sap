import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import Header from '../common/header';
import PurchaseList from './Inventory/List';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag:""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  onSubmit() {
    console.log('Submit')
  }
  componentDidMount() {
    this.props.fetchPurchaseTagList();
  }
  render() {
    const { purchaseList, dealers, products, metalRates } = this.props;
    const { tag } = this.state;
    return (
      <div>
      	<Header title="Inventory" icon="sales" />

      	<div className="container containerRow">
        <h1>Inventory</h1>
          <div className="row">
            <div className="col-2">
              <button className="bigButton">
                <small>Gold</small>
                7kg
              </button>
            </div>
            <div className="col-2">
              <button className="bigButton">
                <small>Silver</small>
                5kg
              </button>
            </div>
            <div className="col-2">
              <button className="bigButton">
                <small>Diamond</small>
                1kg
              </button>
            </div>
          </div>
          {!isEmpty(purchaseList) && <PurchaseList data={purchaseList} dealers={dealers} />}
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
    metalRates:state.master
  }
}

export default connect(mapStateToProps, {fetchPurchaseTagList})(Inventory);
