import React from 'react';
import Dialog from 'material-ui/Dialog';
import { isEmpty, map, findIndex, isNaN, filter } from 'lodash';
import { connect } from "react-redux";
import { fetchPurchaseTagList } from "../../Redux/actions/purchase";
import { createTag, addTagAddonAction, editTagAddonAction } from "../../Redux/actions/tag";
import Header from '../common/header';
import Form from './TagEntry/form';

class TagEntry extends React.Component {
	componentDidMount() {
		this.props.fetchPurchaseTagList();
	}
	render() {
		const { purchaseList, dealers, products, metalRates, productList } = this.props;
		return (
			<div>
				<Header title="Tag entry" icon="billing" />
				<div className="container">
					<div className="col-10">
		            	<h1>Tag entry</h1>
		            	{!isEmpty(purchaseList) && !isEmpty(products) && !isEmpty(metalRates) && !isEmpty(productList) && <Form data={purchaseList} products={products} productList={productList} metalRates={metalRates} paramId={this.props.match.params.id} createTag={this.props.createTag} addTagAddonAction={this.props.addTagAddonAction} editTagAddonAction={this.props.editTagAddonAction} />}
		            </div>   
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    purchaseList:state.purchaseTagList.data,
    products:state.product.productLst,
    productList:state.product.productLst,
    dealers:state.dealer.dealerList,
    metalRates:state.master
  }
}

export default connect(mapStateToProps, {fetchPurchaseTagList, createTag, addTagAddonAction, editTagAddonAction})(TagEntry);
