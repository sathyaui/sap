import React, { Component } from 'react';
import { map } from 'lodash';

import { grossWastageCalc } from '../../helpers';

class List extends Component {
	getTypeName(code) {
		let typeName = map(this.props.products, el => {
			if(el.productCode === code) return el.productName;
		});
		return typeName;
	}
	deleteRow(id) {
		this.props.deleteRow(id);
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
					<th style={{"textAlign":"right"}}></th>
				</tr>
			</thead>
			<tbody>
				{map(data, (el, i) => {
					return <tr key={i}>
						<td>	
							{this.getTypeName(el.data.productCode)}
						</td>
						<td style={{"textAlign":"right"}}>	
							{el.data.grossWeight}
						</td>
						<td style={{"textAlign":"right"}}>	
							{el.data.purchaseRate}
						</td>
						<td style={{"textAlign":"right"}}>	
							{el.data.makingCharge}
						</td>
						<td style={{"textAlign":"right"}}>	
							{el.data.wastage}
						</td>	
						<td style={{"textAlign":"right"}}>	
							{grossWastageCalc(el.data, el.data.purchaseRate)}
						</td>
						<td style={{"textAlign":"right"}}>
							<a href="javascript:void(0)" onClick={this.deleteRow.bind(this, i)}>Remove</a>
						</td>
					</tr>
				})}
			</tbody>
		</table>
	}
};

export default List;