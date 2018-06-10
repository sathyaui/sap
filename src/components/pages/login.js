import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import { loginUser } from '../../Redux/actions/login';
import TextField from '../common/FormControls/textField';
import PrimaryButton from '../common/FormControls/primaryButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      errors: {},
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

   onHandleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  onHandle(e) {
    console.log(e);
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  handleChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  validate (data) {
    const errors = {};
    if (!data.username) errors.username = "Enter your username";
    if (!data.password) errors.password = "Enter your password";
    return errors;
  }
  onSubmit (e){
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    this.context.router.history.push('/dashboard');
    // if(Object.keys(errors).length === 0) {
    //   const reqObject = {
    //     loginId:this.state.username,
    //     loginPwd:this.state.password,
    //     loginDeviceId:'Test123'
    //   };
    //   this.props.loginUser(reqObject).then(res => {
    //     this.context.router.history.push('/dashboard');
    //   });
    // }
  }
  render() {
    const {username, password, errors} = this.state
    return (
      <div>
        <div className="container">
          <div className="row centerAlign" style={{height:'100vh'}}>
            <div className="col-4 center-block">
              <TextField
                id="username"
                type="text"
                name="username"
                labelName="User name"
                value={username}
                onChange={this.onHandleChange}
                error={errors.username}
              />
              <TextField
                id="Password"
                type="password"
                name="Password"
                value={password}
                labelName="Password"
                error={errors.password}
                onChange={this.handleChange}
              />
              <div className="smallSize">
                <PrimaryButton label="Login" onClick={this.onSubmit} fluid />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(null, {loginUser})(Login);