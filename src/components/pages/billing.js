import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty, map } from 'lodash';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { getTagDataById, deleteTagAction } from "../../Redux/actions/tag";
import { createSale } from "../../Redux/actions/sale";

import { grossWastageCalc } from '../helpers';

import Header from '../common/header';
import Cart from '../common/cart';

import TextField from '../common/FormControls/textField';
import PrimaryButton from '../common/FormControls/primaryButton';

import List from './Billing/list';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag:"",
      setId:'',
      tagData:[],
      dialogueOpen:false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  deleteRow = (id) => {
    this.setState({
      setId:id,
      dialogueOpen:true
    });
  };
  onSubmit(e) {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        tag:""
      })
      this.props.getTagDataById(this.state.tag).then(res => {
        this.setState(prevState => ({
          tagData:prevState.tagData.concat(res.data)
        }));
      }, err => {
        alert('Please enter valid tag id!')
      });
    }
  }
  handleClose = () => {
    this.setState({dialogueOpen: false});
  };
  handleSubmit = () => {
    this.props.deleteTagAction(this.state.setId);
    this.setState({dialogueOpen: false});
  };
  validate = data => {
    const errors = {};
    if (!data.tag) errors.tag = "Can't be blank";
    return errors;
  };
  handleCashSubmit = (paidAmount) => {
    const reqModel = [];
    map(this.state.tagData, el => {
      reqModel.push({
        "tagId": el.data.tagId,
        "productCode": el.data.productCode,
        "piece": el.data.piece,
        "grossWeight": el.data.grossWeight,
        "netWeight": el.data.netWeight,
        "lessWeight": el.data.lessWeight,
        "rate": el.data.purchaseRate,
        "wastage": el.data.wastage,
        "makingCharge": el.data.makingCharge,
        "grossOrNet": "N",
        "saleTaxPercent": 0,
        "discount" : el.data.discount,
        "otherCharge": el.data.otherCharge,
        "amount": el.data.purchaseRate,
        "saleType" : "paid",
        "saleAddon": el.data.tagAddon
      });
    });
    let reqObj = {
      salesList:reqModel,
      description: "req-Custome",
      operatorCode: 1
    };
    this.props.createSale(reqObj).then(res => {
      console.log(res);
    });
  };
  render() {
    const { tag, errors, tagData } = this.state;
    let subTotal = 0;
    if(!isEmpty(tagData)) {
      map(tagData, el => {
        subTotal += grossWastageCalc(el.data, el.data.purchaseRate);
      });
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div>
      	<Header title="Billing" icon="billing" />
      	<div className="container containerRow">
          <div className="">
            <h1>Billings</h1>
            <div className="row">
              <div className="col-4">
                <TextField
                  id="tag"
                  type="text"
                  name="tag"
                  value={tag}
                  placeholder=""
                  onChange={this.handleChange}
                  noLabel
                  error={errors.tag}
                  labelName="" />
              </div>
              <div className="col-3">
                <PrimaryButton label="Submit" onClick={this.onSubmit} />
              </div>
            </div>
            {tagData !== undefined && !isEmpty(tagData) && <List data={tagData} products={this.props.products} deleteRow={this.deleteRow} />}
            {tagData !== undefined && !isEmpty(tagData) && <Cart total={subTotal} handleCashSubmit={this.handleCashSubmit} />}
        	</div>
        </div>
        <Dialog
          title="Confirm"
          actions={actions}
          contentStyle={{width:'300px'}}
          modal={false}
          open={this.state.dialogueOpen}
          onRequestClose={this.handleClose}
        >
          Are you sure want to delete this?
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tagData:state.tagDataById,
    products:state.product.productLst,
  }
}

export default connect(mapStateToProps, {getTagDataById, deleteTagAction, createSale})(Billing);