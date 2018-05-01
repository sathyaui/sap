import { CREATE_TAG, CREATE_TAG_ADDON, EDIT_TAG_ADDON } from '../types';
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