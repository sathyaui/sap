import React from 'react';
import Dialog from 'material-ui/Dialog';
import { isEmpty, map, findIndex, isNaN, filter } from 'lodash';
import { onlyNumber, onlyFloatNumber } from '../../helpers';
import TextField from '../../common/FormControls/textField';
import PrimaryButton from '../../common/FormControls/primaryButton';
import { config } from '../../../theme';

export default class Modal extends React.Component {
	state = {
		productCode:'',
		adgrossWeight:'',
		adnetWeight:'',
		piece:'',
		open:false,
		errors: {}
	};
	componentWillReceiveProps(nextProps) {
		if(this.props.open !== nextProps.open) {
			this.setState({
				open:nextProps.open
			})
		}
		if(this.props.selectedIndexData !== nextProps.selectedIndexData) {
			if(!isEmpty(nextProps.selectedIndexData)) {
				this.setState({
					piece:nextProps.selectedIndexData.addonPiece,
					adgrossWeight:nextProps.selectedIndexData.addonGrossWeight,
					adnetWeight:nextProps.selectedIndexData.addonNetWeight,
				});
			}			
		}
	}
	onChange = e =>
	    this.setState({
	      [e.target.name]: e.target.value
	    });    
	handleClose = () => {
		this.props.requestClose();
	};
	resetState = () => {
		this.setState({
			piece:'',
			adgrossWeight:'',
			adnetWeight:'',
		});
	};
	returnData = () => {
		const newItem = [{
			addonProductCode : this.props.productCode,
			addonPiece : this.state.piece,
			addonGrossWeight : this.state.adgrossWeight,
			addonNetWeight : this.state.adnetWeight,
			addonLessWeight: parseFloat(this.state.adgrossWeight)-parseFloat(this.state.adnetWeight)
		}];
		return newItem;
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.addTagAddonAction(this.returnData());
		this.props.requestClose();
		this.resetState();
	};
	onUpdate = e => {
		e.preventDefault();
		this.props.editTagAddonAction(this.props.selectedIndex, this.returnData());
		this.props.requestClose();
		this.resetState();
	};
	validate = data => {
		const errors = {};
		if (!data.addonProductName) errors.addonProductName = "Can't be blank";
		return errors;
	};
	render() {
		const { adgrossWeight, adnetWeight, piece, errors } = this.state;
		return (
			<Dialog
				title="Tag Entry"
				modal={false}
				open={this.props.open}
				titleStyle={{backgroundColor:config.liteBlue}}
				bodyStyle={{backgroundColor:config.liteBlue}}
				onRequestClose={this.handleClose}
			>
				<div className="row">
	                <div className="col-4">
	                  <TextField
	                    id="piece"
	                    type="text"
	                    name="piece"
	                    value={piece}
	                    onChange={this.onChange}
	                    labelName="piece"
	                    error={errors.piece} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="adgrossWeight"
	                    type="text"
	                    name="adgrossWeight"
	                    value={adgrossWeight}
	                    onChange={this.onChange}
	                    labelName="Gross Weight"
	                    error={errors.adgrossWeight} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="adnetWeight"
	                    type="text"
	                    name="adnetWeight"
	                    value={adnetWeight}
	                    onChange={this.onChange}
	                    labelName="Net Weight"
	                    error={errors.adnetWeight} />
	                </div>
	                <div className="col-4">
	                	{this.props.selectedIndex !== ''?<PrimaryButton label="Update" onClick={this.onUpdate} />:<PrimaryButton label="Submit" onClick={this.onSubmit} />}
	                </div>
                </div>
			</Dialog>
		);
	}
}
