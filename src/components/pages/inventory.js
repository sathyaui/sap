import React, { Component } from 'react';
import { connect } from "react-redux";
import { isEmpty, map, filter } from 'lodash';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import Header from '../common/header';
import DatePicker from '../common/DatePicker';
import PurchaseList from './Inventory/List';
import TextField from '../common/FormControls/textField';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag:"",
      searchInput:"",
      startDate:"2018-05-11",
      endDate:"2018-05-28",
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { startDate, endDate } = this.state;
    this.updateInventoryList(startDate, endDate);
  }
  updateInventoryList = (startDate, endDate) => this.props.fetchPurchaseTagList(startDate, endDate);
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  getDateVal = (startDate, endDate) => {
    this.setState({startDate, endDate});
    this.updateInventoryList(startDate, endDate)
  }
  getFiltered = (data, input) => {
    if(input === '') {
      return data;
    } else {
      return filter(data, el => el.purchaseBillNo.indexOf(input) !== -1)
    }
  };
  render() {
    const { purchaseList, dealers, products, metalRates } = this.props;
    const { tag, endDate, startDate, searchInput } = this.state;
    console.log(purchaseList);
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
            <div className="col-6 filterRow">
              <div className="row">
                <div className="col-6">
                  <TextField
                    id="searchInput"
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    placeholder="Filter"
                    onChange={this.handleChange}
                    noLabel
                    labelName="" />
                </div>  
                <div className="col-6">  
                  <DatePicker getDateVal={this.getDateVal} />
                </div>
              </div>
            </div>
          </div>
          {!isEmpty(purchaseList) && <PurchaseList 
            data={this.getFiltered(purchaseList, searchInput)} 
            dealers={dealers} 
            startDate={startDate}
            endDate={endDate} />}
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
