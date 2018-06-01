import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { map, groupBy, sumBy, orderBy } from 'lodash';
import Moment from 'moment';

export default class PurchaseList extends React.Component {
	constructor(props) {
		super(props);
	}
	getDealerName(id) {
		let dlrName = map(this.props.dealers, el => {
			if(el.dealerId === id) return el.dealerName;
		});
		return dlrName;
	}
	routeChange(id) {
		this.context.router.history.push('/productlisting/'+id);
	}
	getTotalVal = (arr, type) => {
		let total = 0;
		map(arr, el => {
			total += parseFloat(el[type]);
		});
		return total;
	};
	render() {
		const { data } = this.props;
		const grouppedData = groupBy(data, 'purchaseBillNo');
		return <table className="table-list purchase-list">
			<thead>
				<tr>
					<th>Purchase No.</th>
					<th>Dealer Name</th>
					<th>Date</th>
					<th>Gross Weight</th>
					<th>Net Weight</th>
				</tr>
			</thead>
			<tbody>
				{Object.keys(grouppedData).map((el, i) => <tr className="hoverRow" key={i} onClick={this.routeChange.bind(this, el)}>
					<td>
						{el}
					</td>
					<td>	
						{this.getDealerName(parseInt(grouppedData[el][0].dealerId))}
					</td>
					<td>	
						{Moment(grouppedData[el][0].purchaseDate).format('DD/MM/YYYY')}
					</td>
					<td>	
						{this.getTotalVal(grouppedData[el], 'grossWt')}
					</td>
					<td>	
						{this.getTotalVal(grouppedData[el], 'netWt')}
					</td>
				</tr>)}
			</tbody>
		</table>
	}
}

PurchaseList.contextTypes = {
  router: PropTypes.object.isRequired,
};
