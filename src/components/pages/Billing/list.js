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
					<th>Weight</th>
					<th>Rate</th>
					<th>Making Charge</th>
					<th>Wastage</th>
					<th style={{"textAlign":"right"}}>Price</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>	
						{this.getTypeName(data.productCode)}
					</td>
					<td>	
						{data.grossWeight}
					</td>
					<td>	
						{data.purchaseRate}
					</td>
					<td>	
						{data.makingCharge}
					</td>
					<td>	
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