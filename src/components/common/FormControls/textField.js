import React from 'react';

const TextField = ({id, name, type, onChange, value, error, labelName, readOnly}) => (
  	<div className="form-group textField">
		<label htmlFor={id}>{labelName}</label>
		<input
			type={type}
			id={id}
			name={name}
			value={value}
			onChange={onChange}
			readOnly={readOnly}
			className={
				error ? "form-control is-invalid" : "form-control"
			}
			/>
		<div className="invalid-feedback">{error}</div>
	</div>
)

export default TextField;
