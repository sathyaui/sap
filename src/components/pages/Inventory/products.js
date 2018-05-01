import React from 'react';
import { filter, map } from 'lodash';
import PropTypes from 'prop-types';

export default class ProductListing extends React.Component {
	constructor(props) {
		super(props);
	}
	getTypeName(code) {
		let typeName = map(this.props.products, el => {
			if(el.productCode === code) return el.productName;
		});
		return typeName;
	}
	openPopup = () => {
		this.props.editItem();
	};
	routeChange(id) {
		this.context.router.history.push('/tagentry/'+id);
	}
	render() {
		const { data, paramId, products } = this.props;
		const indData = filter(data, el => {
			if(parseInt(el.purchaseBillNo) === parseInt(paramId)) return el;
		});
		return (
			<table className="table-list purchase-list">
				<thead>
					<tr>
						<th>Product Type</th>
						<th>Gross Weight</th>
						<th>Net Weight</th>
						<th>Piece</th>
					</tr>
				</thead>
				<tbody>
					{map(indData, (el, i) => <tr key={i} className="hoverRow" key={i} onClick={this.routeChange.bind(this, el.purchaseBillNo)}>
						<td onClick={this.openPopup}>
							{this.getTypeName(parseInt(el.productCode))}
						</td>
						<td>	
							{el.grossWt}
						</td>
						<td>	
							{el.netWt}
						</td>
						<td>	
							{el.piece}
						</td>
					</tr>)}
				</tbody>
			</table>
		);
	}
}


ProductListing.contextTypes = {
  router: PropTypes.object.isRequired,
};