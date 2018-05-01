import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const DatePickerComp = ({id, name, type, onChange, value, error, labelName}) => (
  	<div className="form-group textField">
		<label htmlFor={id}>{labelName}</label>
		<div className="form-input-area">
			<DatePicker hintText="Portrait Dialog" autoOk={true} onChange={onChange} textFieldStyle={{width:'100%', position:'absolute', opacity:0}} />
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
			<i className="la la-calendar iconPosition"></i>	
		</div>	
		<div className="invalid-feedback">{error}</div>
	</div>
)

export default DatePickerComp;
