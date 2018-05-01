import { map } from 'lodash';
import {
  CREATE_TAG_ADDON, EDIT_TAG_ADDON
} from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case CREATE_TAG_ADDON:
      return [...state, ...action.data];
    case EDIT_TAG_ADDON:
    	const updatedItems = map(state, (el, i) => {
    		if(i === action.id) {
    			return el = action.data[0];
    		}
    		return el;
    	});
      	return updatedItems;
    default:
      return state;
  }
}
