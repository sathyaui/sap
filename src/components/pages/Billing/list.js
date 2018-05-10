import React, { Component } from 'react';
import { map } from 'lodash';

class List extends Component {
	render() {
		const { data } = this.props;
		return <table className="table-list purchase-list">
			<thead>
				<tr>
					<th>Piece</th>
					<th>Gross Weight</th>
					<th>Making Charge</th>
					<th>Wastage</th>
					<th>New Weight</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>	
						{data.piece}
					</td>
					<td>	
						{data.grossWeight}
					</td>
					<td>	
						{data.makingCharge}
					</td>
					<td>	
						{data.wastage}
					</td>	
					<td>	
						{data.netWeight}
					</td>
				</tr>
			</tbody>
		</table>
	}
};

export default List;