import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

  render() {
    const actions = [
   		<div className="closeicon" onClick={this.handleClose}><i className="la la-remove"></i></div>
    ];
    const { onChange, title, label, children, backgroundColor, disabled, customContentStyle} = this.props;
    return (
      <div>
        <RaisedButton label={label} style={{ backgroundColor }} disabled={disabled} className="button" onClick={this.handleOpen} />
        <Dialog
    			title={title}
    			actions={actions}
    			modal={false}
          titleStyle={{ backgroundColor:'#f5f6fa'}}
          actionsContainerStyle={{backgroundColor:'#f5f6fa', borderRadius:'10px'}}
          bodyStyle={{ backgroundColor: '#f5f6fa', padding:'0'}}
    			overlayStyle={{backgroundColor: 'rgba(76, 185, 236, 0.6)'}}
          contentStyle={{width: 440,}}
    			style={{ padding: '0px 0px 0px 0px' }}
    			open={this.state.open}
    			onRequestClose={onChange}
        >
        {children}
        </Dialog>
      </div>
    );
  }
}