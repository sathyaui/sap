import React, { Component } from 'react';
import { onlyNumber, dateFormat } from '../../../helpers';
import TextField from '../../../common/FormControls/textField';
import PrimaryButton from '../../../common/FormControls/primaryButton';

class Menu extends Component {
    state = {    
        amount: 0,
        name:"",
        mobNo:""
    };
    onChangeNumberOnly = (e) => {
       this.setState({
          amount: e.target.value
        }); 
    };
    handleChange = (e) => this.setState({[e.target.name]:e.target.value})
    onSubmit = () => {
      this.props.handleCashSubmit(this.state.amount);
      this.props.handleClose();
    };
    render() {
        const {amount, name, mobNo} = this.state;
        const { total } = this.props;
        return (
            <div className="cartOverlay">
                <div className="cartOverlay-content">
                    <h4>Net Total</h4>
                    <span>{total}</span>
                </div>
                <div className="row">
                  <div className="col-6">
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
                      id="balAmount"
                      type="text"
                      name="balAmount"
                      value={parseInt(total)-parseInt(amount)}
                      onChange={this.onChangeNumberOnly}
                      noLabel
                      readOnly
                      labelName="" />
                  </div>
                  <div className="col-6">
                    <h4>Name</h4>
                    <TextField
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      noLabel
                      labelName="" />
                    <h4>Mobile no</h4>
                    <TextField
                        id="mobNo"
                        type="text"
                        name="mobNo"
                        value={mobNo}
                        onChange={this.handleChange}
                        noLabel
                        labelName="" />
                  </div>
                </div>  
                <PrimaryButton label="Submit" onClick={this.onSubmit} />
            </div>
        );
    }
} 

export default Menu;
