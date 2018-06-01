import { CREATE_TAG, CREATE_TAG_ADDON, EDIT_TAG_ADDON, FETCH_TAG_DATA_BY_ID, DELETE_TAG_DATA_BY_ID, FETCH_TAG_LIST } from '../types';
import api from '../api';

export const setTag = data => ({
	type:CREATE_TAG,
	data
});

export const createTag = (data) => dispatch =>
    api.tag.createTagAction(data).then(data => dispatch(setTag(data)));

export const addTagAddon = data => ({
	type:CREATE_TAG_ADDON,
	data
});

export const addTagAddonAction = data => dispatch => {
	dispatch(addTagAddon(data));
}

export const editTagAddon = (id, data) => ({
	type:EDIT_TAG_ADDON,
	data,
	id
});

export const editTagAddonAction = (index, data) => dispatch => {
	dispatch(editTagAddon(index, data));
}

export const setTagId = data => ({
	type:FETCH_TAG_DATA_BY_ID,
	data
});

export const getTagDataById = (id) => dispatch =>
    api.tagById.fetchTagInfoAction(id).then(data => dispatch(setTagId(data))); 

export const deleteTagId = id => ({
	type:DELETE_TAG_DATA_BY_ID,
	id
});

export const deleteTagAction = id => dispatch => {
	dispatch(deleteTagId(id));
}

export const fetchTagsList = (data) => ({
	type:FETCH_TAG_LIST,
	data
});

export const getTagListData = () => dispatch =>
    api.tagList.fetchTagListAction().then(data => dispatch(fetchTagsList(data)));        