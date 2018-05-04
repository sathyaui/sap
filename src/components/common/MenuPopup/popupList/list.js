import React, { Component } from 'react';
import { onlyNumber, dateFormat } from '../../../helpers';
import TextField from '../../../common/FormControls/textField';

class Menu extends Component {
    state = {    
        billRefNo: "",
    };
    onChangeNumberOnly(e){
       this.setState({
          billRefNo: e.target.value
        }); 
    };
    render() {
        const {billRefNo} = this.state;
        return (
            <div className="cartOverlay">
                <div className="cartOverlay-content">
                    <h2>Net Total</h2>
                    <span>12,690.00</span>
                </div>
                <div className="cartOverlay-content">
                    <h2>Recevied Amount</h2>
                    <div className="cartOverlay-content-amount"><span>13,000,00</span></div>
                </div>
                <div className="cartOverlay-content">
                    <h2>Balance Amount</h2>
                    <div className="cartOverlay-content-amount"><span>310.00</span></div>
                </div>
            </div>
        );
    }
} 

export default Menu;
