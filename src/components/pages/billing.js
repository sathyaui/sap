import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { getTagDataById } from "../../Redux/actions/tag";

import Header from '../common/header';
import Table from '../common/table';
import Total from '../common/table';
import Cart from '../common/cart';

import TextField from '../common/FormControls/textField';
import PrimaryButton from '../common/FormControls/primaryButton';

import List from './Billing/list';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  onSubmit() {
    this.props.getTagDataById("CHN5");
  }
  render() {
    const { tag } = this.state;
    return (
      <div>
      	<Header title="Billing" icon="billing" />
      	<div className="container">
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
            <div className="col-3">
              <PrimaryButton label="Submit" onClick={this.onSubmit} />
            </div>
          </div>
          {this.props.tagData !== undefined && !isEmpty(this.props.tagData) && <List data={this.props.tagData} products={this.props.products} />}
          {this.props.tagData !== undefined && !isEmpty(this.props.tagData) && <Cart />}
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagData:state.tagDataById.data,
    products:state.product.productLst,
  }
}

export default connect(mapStateToProps, {getTagDataById})(Billing);