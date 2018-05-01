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
					<th>Product code</th>
					<th>Piece</th>
					<th>Gross Weight</th>
					<th>New Weight</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{map(data, (el, i) => <tr key={i}>
					<td>
						{el.addonProductCode}
					</td>
					<td>	
						{el.addonPiece}
					</td>
					<td>	
						{el.addonGrossWeight}
					</td>	
					<td>	
						{el.addonNetWeight}
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