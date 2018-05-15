import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import Header from '../common/header';
import PurchaseList from './Inventory/List';

import TextField from '../common/FormControls/textField';

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
    const { purchaseList, dealers } = this.props;
    const { tag } = this.state;
    return (
      <div>
      	<Header title="Inventory" icon="sales" />

      	<div className="container">
        <h1>Inventory</h1>
          <div className="row">
            <div className="col-4">
              <TextField
                id="tag"
                type="text"
                name="tag"
                value={tag}
                onChange={this.handleChange}
                noLabel
                labelName="" />
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
    dealers:state.dealer.dealerList,
  }
}

export default connect(mapStateToProps, {fetchPurchaseTagList})(Inventory);
