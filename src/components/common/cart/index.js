import React, { Component } from 'react';
import PrimaryButton from '../../common/FormControls/primaryButton';
import Fade from "../../common/Animation/fade";
import Cash from "../../common/MenuPopup/popupList/list";
import Savings from "../../common/MenuPopup/popupList/list1";
import RaisedButton from "../../common/FormControls/popup";

class Cart extends Component {
	state = {
	    cash:false,
	    card:false,
	    savings:false
  	};
  	menuOpenClose = () =>{
  		this.setState({
  			cash:true,
  		})
  	}
  	render() {
	    return (
	      	<div className="cart-page">
				<div className="cart-page-content">
					<div className="cart-page-net">
						<div className="cart-page-total">
							<span>sub total</span>
							<strong>12,345</strong>
						</div>
						<div className="cart-page-total">
							<span>tax(&#37;)</span>
							<strong>345</strong>
						</div>
						<div className="cart-page-total">
							<span>net total</span>
							<strong>12,690</strong>
						</div>
					</div>
					<div className="cart-page-button">
						<RaisedButton backgroundColor="#4cb9ec" label="cash"><Cash /></RaisedButton>
						<RaisedButton backgroundColor="#816dcc" label="card"><Savings /></RaisedButton>
						<RaisedButton backgroundColor="#816dcc" label="savings" disabled={true}></RaisedButton>
					</div>
				</div>
			</div>
	    );
  	}
}
export default Cart;


