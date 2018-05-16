import React from 'react';
import Dialog from 'material-ui/Dialog';
import { isEmpty, map, findIndex, isNaN, filter } from 'lodash';
import { connect } from "react-redux";
import Barcode from 'react-barcode';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { onlyNumber, onlyFloatNumber } from '../../helpers';
import TextField from '../../common/FormControls/textField';
import PrimaryButton from '../../common/FormControls/primaryButton';
import Header from '../../common/header';
import { config } from '../../../theme';
import List from './list';
import AddonPopup from './addon';

const PrintTemplate = require ('react-print');

const style = {
  refresh: {
    display: 'inline-block',
    position: 'absolute',
    marginLeft:'150px',
    marginTop:'100px'
  },
};


class TagEntry extends React.Component {
	state = {
		barCodeValue:0,
		productName:'',
		productCode:'',
		grossWeight:'',
		productType:'',
		selectedIndex:'',
		loading:false,
		netWeight:'',
		purity:'',
		purchaseTaxPercent:'',
		wastageCharge:'',
		makingCharge:'',
		data:[],
		addPopOpen:false,
		buttonDisabled:false,
		errors: {}
	};
	componentDidMount() {
		const { data, paramId, products, metalRates } = this.props;
		const indData = filter(data, el => {
			if(parseInt(el.purchaseBillNo) === parseInt(paramId)) return el;
		});
		const typeName = filter(this.props.products, el => {
			if(parseInt(el.productCode) === parseInt(indData[0].productCode)) return el;
		});
		this.setState({
			productName:typeName[0].productName,
			grossWeight:indData[0].grossWt,
			netWeight:indData[0].netWt,
			data:indData,
			productCode:parseInt(indData[0].productCode)
		});
		this.getOtherDatas(typeName[0].productName);
	}
	getOtherDatas = value => {
		map(this.props.productList, el => {
			if(el.productName === value) {
				const metalIndex = findIndex(this.props.metalRates, ['metalName',el.metalName]);
				this.setState({
					wastageCharge:el.wastage,
					productType:el.metalName,
					purity:this.props.metalRates[metalIndex].metalPurity,
					metalRate:this.props.metalRates[metalIndex].metalRate
				});
			}
			
		});
	};
	onChange = e =>
	    this.setState({
	      [e.target.name]: e.target.value
	    });    
	handleClose = () => {
		this.setState({
			addPopOpen:false,
			selectedIndex:''
		});
	};
	printContent = () => {
		let mywindow = window.open('', 'PRINT', 'height=400,width=600');
		mywindow.document.write(document.getElementById('printArea').innerHTML);
		mywindow.print();
	    mywindow.close();
	    return true;
	};
	addonPopup = () => {
		this.setState({
			addPopOpen:!this.state.addPopOpen
		});
	};
	editItem = (index) => {
	    this.setState({
	      addPopOpen:!this.state.addPopOpen,
	      selectedIndex:index
	    });
	  };
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			loading:true
		})
		const { grossWeight, netWeight, data, metalRate, wastageCharge, makingCharge, purchaseTaxPercent } = this.state;
		const reqObj = {
			productCode : parseInt(data[0].productCode),
			piece : 1,
			grossWeight : grossWeight,
			netWeight : netWeight,
			lessWeight : parseFloat(grossWeight)-parseFloat(netWeight),
			purchaseRate : parseFloat(metalRate),
			purchaseNo :parseInt(data[0].purchaseNo),
			wastage : wastageCharge ,
			makingCharge : makingCharge,
			grossOrNet : "N",
			purchaseTaxPercent : purchaseTaxPercent,
			discount : 0,
			otherCharge :data[0].otherCharge,
			tagAddon : this.props.tagAddonData
		};
		this.props.createTag(reqObj).then(res => {
			console.log(res);
			this.setState({
				barCodeValue:res.data.data.identifier,
				loading:false,
				buttonDisabled:true
			});
		})
	};
	validate = data => {
		const errors = {};
		if (!data.productName) errors.productName = "Can't be blank";
		return errors;
	};
	render() {
		const { productName, grossWeight, netWeight, wastageCharge, makingCharge, productType, purity, purchaseTaxPercent, barCodeValue, productCode, selectedIndex, errors, loading, buttonDisabled } = this.state;
		const { tagAddonData } = this.props;
		return (
			<div className="row">
				<div className="col-8">
					<div className="row">
		                <div className="col-6">
		                  <TextField
		                    id="productName"
		                    type="text"
		                    name="productName"
		                    value={productName}
		                    onChange={this.onChange}
		                    labelName="Product Name"
		                    readOnly
		                    error={errors.productName} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="productType"
		                    type="text"
		                    name="productType"
		                    value={productType}
		                    onChange={this.onChange}
		                    labelName="Product Type"
		                    readOnly
		                    error={errors.productType} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="purity"
		                    type="text"
		                    name="purity"
		                    value={purity}
		                    onChange={this.onChange}
		                    readOnly
		                    labelName="Purity" />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="grossWeight"
		                    type="text"
		                    name="grossWeight"
		                    value={grossWeight}
		                    onChange={this.onChange}
		                    labelName="Gross Weight"
		                    error={errors.grossWeight} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="netWeight"
		                    type="text"
		                    name="netWeight"
		                    value={netWeight}
		                    onChange={this.onChange}
		                    labelName="Net Weight"
		                    error={errors.netWeight} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="wastageCharge"
		                    type="text"
		                    name="wastageCharge"
		                    value={wastageCharge}
		                    onChange={this.onChange}
		                    labelName="Wastage charge"
		                    error={errors.wastageCharge} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="makingCharge"
		                    type="text"
		                    name="makingCharge"
		                    value={makingCharge}
		                    onChange={this.onChange}
		                    labelName="Making charge"
		                    error={errors.makingCharge} />
		                </div>
		                <div className="col-6">
		                  <TextField
		                    id="purchaseTaxPercent"
		                    type="text"
		                    name="purchaseTaxPercent"
		                    value={purchaseTaxPercent}
		                    onChange={this.onChange}
		                    labelName="Tax"
		                    error={errors.purchaseTaxPercent} />
		                </div>
	                </div>
	                {!isEmpty(tagAddonData) && <List data={tagAddonData} editItem={this.editItem} />}
	                <div className="row buttonListRow">
	                	<div className="col-6">
		                	<PrimaryButton label="Submit" onClick={this.onSubmit} disabled={buttonDisabled} fluid />
		                </div>
	                	<div className="col-6">
		                	<PrimaryButton label="Addon" onClick={this.addonPopup} disabled={buttonDisabled} fluid />
		                </div>
	                </div>
                </div>
                <div className="col-4">
	                {loading && <RefreshIndicator
				      size={40}
				      left={10}
				      top={0}
				      status="loading"
				      style={style.refresh}
				    />}
	                {barCodeValue !== 0 && <div className="barcodeWrapper">
	                	<div className="buttonListRow" id="printArea">
	                		<Barcode value={barCodeValue} option={{displayValue:false}} />
	                	</div>
	                	<PrimaryButton label="Print" onClick={this.printContent} />
	                </div>}
                </div>
                <AddonPopup open={this.state.addPopOpen} tagAddonData={tagAddonData} requestClose={this.handleClose} productCode={productCode} selectedIndexData={tagAddonData[selectedIndex]} selectedIndex={selectedIndex} addTagAddonAction={this.props.addTagAddonAction} editTagAddonAction={this.props.editTagAddonAction} />
            </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    tagAddonData:state.tagAddon,
  }
}

export default connect(mapStateToProps, {})(TagEntry);
