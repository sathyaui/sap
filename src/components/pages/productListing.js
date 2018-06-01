import React, { Component } from 'react';
import { connect } from "react-redux";
import { map, isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import Barcode from 'react-barcode';
import PrimaryButton from '../common/FormControls/primaryButton';
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import { getTagListData } from "../../Redux/actions/tag";
import Header from '../common/header';
import List from './Inventory/products';

class ProductListing extends Component {
  state = {
    open:false,
    tagId:0,
    dialogueOpen:false,
  };
  componentDidMount() {
    this.props.fetchPurchaseTagList();
    this.props.getTagListData();
  }
  requestClose = () => {
    this.setState({
      open:false,
      dialogueOpen:false
    });
  };
  editItem = () => {
    this.setState({
      open:!this.state.open,
    });
  };
  printTag = (id) => {
    map(this.props.tagList.content, el => {
      if(el.purchaseNo === parseInt(id)) {
        this.setState({
          tagId:el.tagId
        });
      }
    });
    this.setState({
      dialogueOpen:true
    });
  };
  printContent = () => {
    let mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write(document.getElementById('printArea').innerHTML);
    mywindow.print();
    mywindow.close();
    return true;
  };
  render() {
    const { purchaseList, dealers, products, tagList } = this.props;
    const { tagId } = this.state;
    return (
      <div>
      	<Header title="Inventory" icon="sales" />
      	<div className="container containerRow">
          <h1>Products</h1>
          {!isEmpty(purchaseList) && <List data={purchaseList} products={products} dealers={dealers} paramId={this.props.match.params.id} editItem={this.editItem} printTag={this.printTag} />}
      	</div>
        <Dialog
          title="Barcode"
          contentStyle={{width:'500px'}}
          modal={false}
          open={this.state.dialogueOpen}
          onRequestClose={this.requestClose}
        >
          <div className="barcodeWrapper">
            {tagId !== 0 && <div className="buttonListRow" id="printArea">
              <Barcode value={tagId} option={{displayValue:false}} />
            </div>}
            <PrimaryButton label="Print" onClick={this.printContent} />
          </div>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    purchaseList:state.purchaseTagList.data,
    products:state.product.productLst,
    dealers:state.dealer.dealerList,
    tagList:state.tagDataList.data
  }
}

ProductListing.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {fetchPurchaseTagList, getTagListData})(ProductListing);
