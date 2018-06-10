import React, { Component } from 'react';
import PrimaryButton from '../../common/FormControls/primaryButton';
import Fade from "../../common/Animation/fade";
import Cash from "../../common/MenuPopup/popupList/list";
import Savings from "../../common/MenuPopup/popupList/list1";
import RaisedButton from "../../common/FormControls/popup";

class Cart extends Component {
  	handleCashSubmit = (paidAmount) => {
  		this.props.handleCashSubmit(paidAmount);
  	};
  	render() {
  		const finalAmount = this.props.total+((this.props.total*3)/100);
	    return (
	      	<div className="cart-page">
				<div className="cart-page-content">
					<div className="cart-page-net">
						<div className="cart-page-total">
							<span>sub total</span>
							<strong>{this.props.total}</strong>
						</div>
						<div className="cart-page-total">
							<span>tax(&#37;)</span>
							<strong>{(this.props.total*3)/100}</strong>
						</div>
						<div className="cart-page-total">
							<span>net total</span>
							<strong>{finalAmount}</strong>
						</div>
					</div>
					<div className="cart-page-button">
						<RaisedButton backgroundColor="#4cb9ec" label="cash"><Cash total={finalAmount} handleCashSubmit={this.handleCashSubmit} /></RaisedButton>
						<RaisedButton backgroundColor="#816dcc" label="card"><Savings total={finalAmount} /></RaisedButton>
						<RaisedButton backgroundColor="#816dcc" label="savings" disabled={true}></RaisedButton>
					</div>
				</div>
			</div>
	    );
  	}
}
export default Cart;


