import { CREATE_SALE } from '../types';
import api from '../api';

export const setSale = data => ({
	type:CREATE_SALE,
	data
});

export const createSale = (data) => dispatch =>
    api.sales.createSaleAction(data).then(data => dispatch(setSale(data)));
       