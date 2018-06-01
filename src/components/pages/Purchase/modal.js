import React from 'react';
import Dialog from 'material-ui/Dialog';
import { isEmpty, map, findIndex, isNaN } from 'lodash';
import { onlyNumber, onlyFloatNumber } from '../../helpers';
import SelectField from '../../common/FormControls/selectField';
import TextField from '../../common/FormControls/textField';
import PrimaryButton from '../../common/FormControls/primaryButton';
import { config } from '../../../theme';

export default class Modal extends React.Component {
	state = {
		piece:'',
		type:'',
		grossWeight:'',
		metalRate:0,
		amount:0,
		makingCharge:'',
		productCode:'',
		wastage:'',
		netWeight:'',
		purchaseTaxPercent:'',
		otherCharge:'',
		open: false,
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
					piece:nextProps.selectedIndexData.piece,
					type:nextProps.selectedIndexData.type,
					grossWeight:nextProps.selectedIndexData.grossWeight,
					makingCharge:nextProps.selectedIndexData.makingCharge,
					wastage:nextProps.selectedIndexData.wastage,
					netWeight:nextProps.selectedIndexData.netWeight,
					metalRate:nextProps.selectedIndexData.metalRate,
					otherCharge:nextProps.selectedIndexData.otherCharge,
					productCode:nextProps.selectedIndexData.productCode,
					purchaseTaxPercent:nextProps.selectedIndexData.purchaseTaxPercent,
					amount:nextProps.selectedIndexData.amount
				});
				this.getOtherDatas(nextProps.selectedIndexData.type);
			}			
		}
	}
	onChange = e =>
	    this.setState({
	    	[e.target.name]: e.target.value
	    });
	onChangeNumberOnly = e => {
		if (e.target.value === '' || onlyNumber(e.target.value)) {
			this.setState({[e.target.name]: e.target.value})
		}
	};
	onChangeFloatNumberOnly = e => {
		if (e.target.value === '' || onlyFloatNumber(e.target.value)) {
			this.setState({[e.target.name]: e.target.value})
		}
	};
	getOtherDatas = value => {
		map(this.props.productList, el => {
			if(el.productName === value) {
				const metalIndex = findIndex(this.props.metalRates, ['metalName',el.metalName]);
				this.setState({
					wastage:el.wastage,
					productCode:el.productCode,
					metalRate:this.props.metalRates[metalIndex].metalRate
				});
			}
			
		});
	};
	calculateAmount = (netWeight, metalRates, wastage, makingCharge, otherCharge) => {
		const wastageWeight = (parseFloat(netWeight)*parseFloat(wastage))/100;
		const totalNetWeight = parseFloat(netWeight)+parseFloat(wastageWeight);
		const totalAmount = (totalNetWeight*metalRates)+parseFloat(makingCharge)+parseFloat(otherCharge);
		return totalAmount;
	};
	handleChoose = (name, value) => {
		this.getOtherDatas(value);
	    this.setState({
	      [name]:value
	    });
	}    
	handleClose = () => {
		this.props.requestClose();
	};
	resetState = () => {
		this.setState({
			piece:'',
			type:'',
			metalRate:'',
			amount:0,
			productCode:'',
			purchaseTaxPercent:'',
			grossWeight:'',
			makingCharge:'',
			wastage:'',
			netWeight:'',
			otherCharge:''
		});
	};
	returnData = () => {
		const newItem = [{
			piece:this.state.piece,
			type:this.state.type,
			productCode:this.state.productCode,
			grossWeight:this.state.grossWeight,
			makingCharge:this.state.makingCharge,
			wastage:this.state.wastage,
			netWeight:this.state.netWeight,
			lessWeight:parseFloat(this.state.grossWeight)-parseFloat(this.state.netWeight),
			otherCharge:this.state.otherCharge,
			rate:this.state.metalRate,
			amount:this.calculateAmount(this.state.netWeight, this.state.metalRate, this.state.wastage, this.state.makingCharge, this.state.otherCharge),
			purchaseTaxPercent:this.state.purchaseTaxPercent,
			purchaseType:"NEWORN",
			grossOrNet:"N"
		}];
		return newItem;
	}
	onSubmit = e => {
		e.preventDefault();
		const errors = this.validate(this.state);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.requestClose();
			this.resetState();
			this.props.addPurchase(this.returnData());
		}
	};
	onUpdate = e => {
		e.preventDefault();
		const errors = this.validate(this.state);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.requestClose();
			this.resetState();
			this.props.updatePurchase(this.props.selectedIndex, this.returnData());
		}
	};
	validate = data => {
		const errors = {};
		if (!data.piece) errors.piece = "Can't be blank";
		if (!data.type) errors.type = "Can't be blank";
		if (!data.grossWeight) errors.grossWeight = "Can't be blank";
		if (!data.makingCharge) errors.makingCharge = "Can't be blank";
		if (!data.wastage) errors.wastage = "Can't be blank";
		if (!data.netWeight) errors.netWeight = "Can't be blank";
		return errors;
	};
	render() {
		const { piece, type, makingCharge, grossWeight, netWeight, wastage, metalRate, otherCharge, purchaseTaxPercent, amount, errors } = this.state;
		const { productList } = this.props;
		const productTypes = [];
	    map(productList, el => {
	      productTypes.push(el.productName);
	    });
		return (
			<Dialog
				title="Add product"
				modal={false}
				open={this.state.open}
				autoDetectWindowHeight={true}
				autoScrollBodyContent={true}
				repositionOnUpdate={true}
				titleStyle={{backgroundColor:config.liteBlue}}
				bodyStyle={{backgroundColor:config.liteBlue}}
				onRequestClose={this.handleClose}
			>
				<div className="row">
	                <div className="col-4">
	                  <SelectField
	                    id="type"
	                    type="text"
	                    name="type"
	                    value={type}
	                    data={productTypes}
	                    onChange={this.handleChoose}
	                    labelName="Type"
	                    error={errors.type} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="piece"
	                    type="text"
	                    name="piece"
	                    value={piece}
	                    onChange={this.onChangeNumberOnly}
	                    labelName="Piece"
	                    error={errors.piece} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="grossWeight"
	                    type="text"
	                    name="grossWeight"
	                    value={grossWeight}
	                    onChange={this.onChangeFloatNumberOnly}
	                    labelName="Gross Weight"
	                    error={errors.grossWeight} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="makingCharge"
	                    type="text"
	                    name="makingCharge"
	                    value={makingCharge}
	                    onChange={this.onChangeFloatNumberOnly}
	                    labelName="Making Charge"
	                    error={errors.makingCharge} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="wastage"
	                    type="text"
	                    name="wastage"
	                    readOnly
	                    value={wastage}
	                    onChange={this.onChange}
	                    labelName="Wastage"
	                    error={errors.wastage} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="netWeight"
	                    type="text"
	                    name="netWeight"
	                    value={netWeight}
	                    onChange={this.onChangeFloatNumberOnly}
	                    labelName="Net Weight"
	                    error={errors.netWeight} />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="otherCharge"
	                    type="text"
	                    name="otherCharge"
	                    value={otherCharge}
	                    onChange={this.onChangeFloatNumberOnly}
	                    labelName="Other charges" />
	                </div>
	                <div className="col-4">
	                  <TextField
	                    id="purchaseTaxPercent"
	                    type="text"
	                    name="purchaseTaxPercent"
	                    value={purchaseTaxPercent}
	                    onChange={this.onChangeNumberOnly}
	                    labelName="Tax" />
	                </div>
	                <div className="col-4">
	                	<div className="form-group">
	                		<label>Total</label>
	                		<h4>{!isNaN(this.calculateAmount(netWeight, metalRate, wastage, makingCharge, otherCharge)) && this.calculateAmount(netWeight, metalRate, wastage, makingCharge, otherCharge)}</h4>
	                	</div>
	                </div>
                </div>
                <div className="row">
                	{this.props.selectedIndex !== ''?<div className="col-4">
	                	<PrimaryButton label="Update" onClick={this.onUpdate} />
	                </div>:
	                <div className="col-4">
	                	<PrimaryButton label="Submit" onClick={this.onSubmit} />
	                </div>}
	            </div>    
			</Dialog>
		);
	}
}
