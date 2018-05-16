import React, { Component } from 'react';
import { map } from 'lodash';

class List extends Component {
	getTypeName(code) {
		let typeName = map(this.props.products, el => {
			if(el.productCode === code) return el.productName;
		});
		return typeName;
	}
	render() {
		const { data } = this.props;
		return <table className="table-list purchase-list">
			<thead>
				<tr>
					<th>Product type</th>
					<th style={{"textAlign":"right"}}>Weight</th>
					<th style={{"textAlign":"right"}}>Rate</th>
					<th style={{"textAlign":"right"}}>Making Charge</th>
					<th style={{"textAlign":"right"}}>Wastage</th>
					<th style={{"textAlign":"right"}}>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>	
						{this.getTypeName(data.productCode)}
					</td>
					<td style={{"textAlign":"right"}}>	
						{data.grossWeight}
					</td>
					<td style={{"textAlign":"right"}}>	
						{data.purchaseRate}
					</td>
					<td style={{"textAlign":"right"}}>	
						{data.makingCharge}
					</td>
					<td style={{"textAlign":"right"}}>	
						{data.wastage}
					</td>	
					<td style={{"textAlign":"right"}}>	
						{data.purchaseRate}
					</td>
				</tr>
			</tbody>
		</table>
	}
};

export default List;