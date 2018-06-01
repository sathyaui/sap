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
	routeChange(id, isTagged) {
		if(!isTagged) {
			this.context.router.history.push('/tagentry/'+id);
		} else {
			this.props.printTag(id);
		}
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
						<th>Tagged</th>
					</tr>
				</thead>
				<tbody>
					{map(indData, (el, i) => {
						const isTagged = el.grossWt === el.tgrossWt;
						return <tr key={i} className="hoverRow" key={i} onClick={this.routeChange.bind(this, el.purchaseNo, isTagged, el)}>
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
							<td>	
								{isTagged?"YES":"NO"}
							</td>
						</tr>
					})}
				</tbody>
			</table>
		);
	}
}


ProductListing.contextTypes = {
  router: PropTypes.object.isRequired,
};