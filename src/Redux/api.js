import axios from 'axios';

const apiUrl = 'http://35.185.32.53:8082/JPOSAPI/v1.0/';

export default {
	master:{
		fetchMasterAction:() => 
			axios.get(apiUrl+'metalrate').then(res => res)
	},
	product:{
		fetchProductAction:() => 
			axios.get(apiUrl+'product').then(res => res)
	},
	dealer:{
		fetchDealersAction:() => 
			axios.get(apiUrl+'dealer').then(res => res)
	},
	purchase: {
		createPurchaseAction:(data) =>
			axios.post(apiUrl+'purchase', data).then(res => res),
		fetchPurchaseAction:(data) =>
			axios.get(apiUrl+'purchase').then(res => res),
		fetchPurchaseTagAction:(data) =>
			axios.get(apiUrl+'purchasevstag?page=0&size=10').then(res => res)
	},
	tag: {
		createTagAction:(data) => 
			axios.post(apiUrl+'tag', data).then(res => res),
	},
	tagById: {
		fetchTagInfoAction:(id) => 
			axios.get(apiUrl+'tag/'+id).then(res => res),
	}
}