import React, { Component } from 'react';
import { onlyNumber, dateFormat } from '../../../helpers';
import TextField from '../../../common/FormControls/textField';

class Menu extends Component {
    state = {    
        billRefNo: "",
    };
    onChangeNumberOnly(e){
       this.setState({
          billRefNo: e.target.value.replace(/\D/,''),
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
                  <h2>Received Amount</h2>
                  <TextField
                    id="billRefNo"
                    type="text"
                    name="billRefNo"
                    value={billRefNo}
                    onChange={this.onChangeNumberOnly.bind(this)}
                 />
              </div>
            </div>
        );
    }
} 

export default Menu;
