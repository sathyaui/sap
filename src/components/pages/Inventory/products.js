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
	routeChange(id, isTagged, isSold) {
		if(isSold) return false;
		if(!isTagged) {
			this.context.router.history.push('/tagentry/'+id);
		} else {
			this.props.printTag(id);
		}
	}
	render() {
		const { data, paramId, products, tagList } = this.props;
		const indData = filter(data, el => {
			if(parseInt(el.purchaseBillNo) === parseInt(paramId)) return el;
		});
		if(tagList === undefined) return false;
		return (
			<table className="table-list purchase-list">
				<thead>
					<tr>
						<th>Product Type</th>
						<th>Gross Weight</th>
						<th>Net Weight</th>
						<th>Piece</th>
						<th>Tagged</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{map(indData, (el, i) => {
						const isTagged = el.grossWt === el.tgrossWt;
						const tagData = filter(tagList.content, elm => parseInt(elm.purchaseNo) === parseInt(el.purchaseNo));
						const isSold = tagData[0].tagMinusDate !== null;
						return <tr key={i} className={isSold?"":"hoverRow"} key={i} onClick={this.routeChange.bind(this, el.purchaseNo, isTagged, isSold, el)}>
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
							<td>	
								{isSold?"SOLD":"-"}
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