import React from 'react';
import classNames from 'classnames/bind';

const Fade = ({children, visible}) => (
	<div className={classNames({ animatedComponent: true }, { opened: visible })}>{children}</div>
)

export default Fade;