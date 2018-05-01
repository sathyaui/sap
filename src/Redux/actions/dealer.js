import { FETCH_DEALER } from '../types';
import api from '../api';

export const setDealers = dealer => ({
	type:FETCH_DEALER,
	dealer
});

export const fetchDealersData = () => dispatch =>
    api.dealer.fetchDealersAction().then(data => dispatch(setDealers(data)));