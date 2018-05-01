import { FETCH_PRODUCT } from '../types';
import api from '../api';

export const setProductData = product => ({
	type:FETCH_PRODUCT,
	product
});

export const fetchProductData = () => dispatch =>
    api.product.fetchProductAction().then(data => dispatch(setProductData(data)));