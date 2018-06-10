import axios from 'axios';

const apiUrl = 'http://35.185.32.53:8082/JPOSAPI/api/v1.0/';

export default {
	master:{
		fetchMasterAction:() => 
			axios.get(apiUrl+'metalrate').then(res => res)
	},
	login:{
		loginAction:(data) =>
			axios.post(apiUrl+'login', data).then(res => res)
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
		fetchPurchaseTagAction:(startDate, endDate) =>
			axios.get(apiUrl+'purchasevstag/'+startDate+'/'+endDate).then(res => res)
	},
	sales: {
		createSaleAction:(data) =>
			axios.post(apiUrl+'sale', data).then(res => res)
	},
	tag: {
		createTagAction:(data) => 
			axios.post(apiUrl+'tag', data).then(res => res),
	},
	tagList: {
		fetchTagListAction:() => 
			axios.get(apiUrl+'tag?size=1000').then(res => res),
	},
	tagById: {
		fetchTagInfoAction:(id) => 
			axios.get(apiUrl+'tag/'+id).then(res => res),
	}
}