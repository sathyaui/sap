import React, { Component } from 'react';
import { onlyNumber, dateFormat } from '../../../helpers';
import TextField from '../../../common/FormControls/textField';
import PrimaryButton from '../../../common/FormControls/primaryButton';

class Menu extends Component {
    state = {    
        amount: 0,
    };
    onChangeNumberOnly = (e) => {
       this.setState({
          amount: e.target.value
        }); 
    };
    onSubmit = () => {
      this.props.handleCashSubmit(this.state.amount);
      this.props.handleClose();
    };
    render() {
        const {amount} = this.state;
        const { total } = this.props;
        return (
            <div className="cartOverlay">
                <div className="cartOverlay-content">
                    <h4>Net Total</h4>
                    <span>{total}</span>
                </div>
                <h4>Recevied Amount</h4>
                <TextField
                  id="amount"
                  type="text"
                  name="amount"
                  value={amount}
                  onChange={this.onChangeNumberOnly}
                  noLabel
                  labelName="" />

                <h4>Balance Amount</h4>
                <TextField
                  id="amount"
                  type="text"
                  name="amount"
                  value={parseInt(total)-parseInt(amount)}
                  onChange={this.onChangeNumberOnly}
                  noLabel
                  readOnly
                  labelName="" />
                <PrimaryButton label="Submit" onClick={this.onSubmit} />
            </div>
        );
    }
} 

export default Menu;
