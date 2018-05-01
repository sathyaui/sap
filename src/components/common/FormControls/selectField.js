import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { map } from 'lodash';

class SelectFieldComp extends Component {
	handleChange = (event, index, value) => {
	    this.setState({value});
	    this.props.onChange(this.props.name, value);
	  };    
	render() {
		const { id, name, onChange, type, value, error, labelName, data } = this.props;
		return <div className="form-group textField">
				<label htmlFor={id}>{labelName}</label>
				<div className="form-input-area">
					<SelectField onChange={this.handleChange} style={{width:'100%', position:'absolute', opacity:0}}>
						{map(data, (el,i) => {
							return <MenuItem key={i} value={el} primaryText={el} />
						})}
					</SelectField>
					<input
						type={type}
						id={id}
						name={name}
						value={value}
						onChange={onChange}
						className={
							error ? "form-control is-invalid" : "form-control"
						}
						/>
					<i className="la la-angle-down iconPosition"></i>
				</div>	
				<div className="invalid-feedback">{error}</div>
			</div>
	}
}

export default SelectFieldComp;
