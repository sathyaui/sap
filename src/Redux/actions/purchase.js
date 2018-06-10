import { CREATE_PURCHASE, ADD_PURCHASE, EDIT_PURCHASE, FETCH_PURCHASE_LIST, PURCHASE_TAG } from '../types';
import api from '../api';

export const addPurchase = data => ({
	type:ADD_PURCHASE,
	data
});

export const addPurchaseAction = data => dispatch => {
	dispatch(addPurchase(data));
}

export const editPurchase = (id, data) => ({
	type:EDIT_PURCHASE,
	data,
	id
});

export const editPurchaseAction = (index, data) => dispatch => {
	dispatch(editPurchase(index, data));
}


export const setPurchase = data => ({
	type:CREATE_PURCHASE,
	data
});

export const createPurchase = (data) => dispatch =>
    api.purchase.createPurchaseAction(data).then(data => dispatch(setPurchase(data)));


export const setPurchaseList = data => ({
	type:FETCH_PURCHASE_LIST,
	data
});

export const fetchPurchaseList = () => dispatch =>
    api.purchase.fetchPurchaseAction().then(data => dispatch(setPurchaseList(data))); 

export const setPurchaseTagList = data => ({
	type:PURCHASE_TAG,
	data
});

export const fetchPurchaseTagList = (startDate, endDate) => dispatch =>
    api.purchase.fetchPurchaseTagAction(startDate, endDate).then(data => dispatch(setPurchaseTagList(data)));        