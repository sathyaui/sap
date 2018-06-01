import React, { Component } from 'react';
import { map } from 'lodash';

class List extends Component {
	editItem = i => {
		this.props.editItem(i);
	};
	render() {
		const { data } = this.props;
		return <table className="table-list purchase-list">
			<thead>
				<tr>
					<th>Type</th>
					<th style={{"textAlign":"right"}}>Piece</th>
					<th style={{"textAlign":"right"}}>Gross Weight</th>
					<th style={{"textAlign":"right"}}>Making Charge</th>
					<th style={{"textAlign":"right"}}>Wastage</th>
					<th style={{"textAlign":"right"}}>New Weight</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{map(data, (el, i) => <tr key={i}>
					<td>
						{el.type}
					</td>
					<td style={{"textAlign":"right"}}>	
						{el.piece}
					</td>
					<td style={{"textAlign":"right"}}>	
						{el.grossWeight}
					</td>
					<td style={{"textAlign":"right"}}>	
						{el.makingCharge}
					</td>
					<td style={{"textAlign":"right"}}>	
						{el.wastage}
					</td>	
					<td style={{"textAlign":"right"}}>	
						{el.netWeight}
					</td>
					<td className="text-right">
						<button onClick={this.editItem.bind(this, i)} className="linkButton">Edit</button>
					</td>
				</tr>)}
			</tbody>
		</table>
	}
};

export default List;