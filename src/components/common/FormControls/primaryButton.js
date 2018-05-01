import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { config } from '../../../theme';

const PrimaryButton = ({onClick, label, styles, fluid, disabled}) => (
  	<RaisedButton label={label} onClick={onClick} disabled={disabled} buttonStyle={{backgroundColor:config.blue}} style={{lineHeight: '48px', height: '48px', width:fluid ? '100%':'200px'}} secondary={true} />
)

export default PrimaryButton;
