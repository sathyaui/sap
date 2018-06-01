import React, { Component } from 'react';
import { onlyNumber, dateFormat } from '../../../helpers';
import TextField from '../../../common/FormControls/textField';
import PrimaryButton from '../../../common/FormControls/primaryButton';

class Menu extends Component {
    state = {    
        billRefNo: "",
    };
    onChangeNumberOnly(e){
       this.setState({
          billRefNo: e.target.value.replace(/\D/,''),
        }); 
    };
    onSubmit = () => {

    };
    render() {
        const {billRefNo} = this.state;
        return (
            <div className="cartOverlay">
              <div className="cartOverlay-content">
                  <h2>Net Total</h2>
                  <span>12,690.00</span>
              </div>
              <h2>Received Amount</h2>
              <TextField
                id="billRefNo"
                type="text"
                name="billRefNo"
                value={billRefNo}
                onChange={this.onChangeNumberOnly.bind(this)}
             />
              <PrimaryButton label="Submit" onClick={this.onSubmit} />
            </div>
        );
    }
} 

export default Menu;
