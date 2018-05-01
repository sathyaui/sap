import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { isEmpty, map, filter, sumBy } from 'lodash';
import Header from '../common/header';
import TextField from '../common/FormControls/textField';
import SelectField from '../common/FormControls/selectField';
import DatePicker from '../common/FormControls/datePicker';
import { onlyNumber, dateFormat } from '../helpers';
import { createPurchase, addPurchaseAction, editPurchaseAction } from "../../Redux/actions/purchase";
import PrimaryButton from '../common/FormControls/primaryButton';
import List from './Purchase/list';
import Modal from './Purchase/modal';

class Purchase extends Component {
  state = {
    dealerName: "",
    billRefNo: "",
    loading:false,
    dealerData:{},
    billDate:'',
    errors: {},
    selectedIndex:'',
    listArr:[]
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });
  handleChoose = (name, value) => {
    map(this.props.dealers, el => {
      if(el.dealerName === value) {
        this.setState({
          billRefNo:el.dealerRegistrationNo,
          dealerData:el
        })
      }
    })
    this.setState({
      [name]:value
    });
  };
  onChangeNumberOnly = e => {
    if (e.target.value === '' || onlyNumber(e.target.value)) {
      this.setState({[e.target.name]: e.target.value})
    }
  };  
  selectDate = (event, date) => {
    this.setState({
      billDate:dateFormat(date)
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const purchaseArr = filter(this.props.purchaseList, (el, i) => {
        delete el.type;
        return el;
      });
      const requestObject = {
        "dealerId":this.state.dealerData.dealerId,
        "purchaseList":purchaseArr,
        "description":"test",
        "billRefNo":'10',
        "billRefDate": this.state.billDate,
        "totalDiscount" : 1500.00,
        "totalRoundOf" : 0.50,
        "totalAmount": sumBy(purchaseArr, 'amount'),
        "operatorCode":this.state.dealerData.operatorCode
      };
      this.props.createPurchase(requestObject).then(res => {
        this.setState({ loading: false });
        this.context.router.history.push('/inventory');
      }, err => {
        this.setState({ loading: false });
      });
    }
  };
  addProduct = () => {
    this.setState({
      open:!this.state.open
    });
  }; 
  requestClose = () => {
    this.setState({
      open:false,
      selectedIndex:''
    });
  };
  validate = data => {
    const errors = {};
    if (!data.dealerName) errors.dealerName = "Can't be blank";
    if (!data.billRefNo) errors.billRefNo = "Can't be blank";
    if (!data.billDate) errors.billDate = "Can't be blank";
    return errors;
  };
  editItem = (index) => {
    this.setState({
      open:!this.state.open,
      selectedIndex:index
    });
  };
  render() {
    const { dealerName, billRefNo, billDate, errors, selectedIndex } = this.state;
    const { purchaseList, productList, dealers, metalRates } = this.props;
    const dealersName = [];
    map(dealers, el => {
      dealersName.push(el.dealerName);
    });
    return (
      <div>
      	<Header title="Purchase" icon="billing" />
      	<div className="container">
          <div className="col-10">
            <h1>Purchase</h1>
            <div className="row">
              <div className="col-3">
                <SelectField
                  id="dealerName"
                  type="text"
                  name="dealerName"
                  value={dealerName}
                  data={dealersName}
                  onChange={this.handleChoose}
                  labelName="Dealer name"
                  error={errors.dealerName} />
              </div>
              <div className="col-3">
                <TextField
                  id="billRefNo"
                  type="text"
                  name="billRefNo"
                  value={billRefNo}
                  readOnly
                  onChange={this.onChangeNumberOnly}
                  labelName="Dealer Ref.no"
                  error={errors.billRefNo} />
              </div>
              <div className="col-3">
                <DatePicker
                  id="billDate"
                  type="text"
                  name="billDate"
                  value={billDate}
                  onChange={this.selectDate}
                  labelName="Bill date"
                  error={errors.billDate} />
              </div>
              <div className="col-3 buttonRow">
                <PrimaryButton label="Add" onClick={this.addProduct} fluid />
              </div>
            </div>
            {!isEmpty(purchaseList) && <List data={purchaseList} editItem={this.editItem} />}
            <PrimaryButton label="Submit" onClick={this.onSubmit} disabled={this.state.loading} />
          </div>
      	</div>
        <Modal open={this.state.open} productList={productList} metalRates={metalRates} selectedIndex={selectedIndex} selectedIndexData={purchaseList[selectedIndex]} requestClose={this.requestClose} addPurchase={this.props.addPurchaseAction} updatePurchase={this.props.editPurchaseAction} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productList:state.product.productLst,
    purchaseList:state.createPurchase,
    dealers:state.dealer.dealerList,
    metalRates:state.master
  }
}

Purchase.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {addPurchaseAction, editPurchaseAction, createPurchase})(Purchase);
