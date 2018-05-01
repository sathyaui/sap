import { map } from 'lodash';
import {
  CREATE_PURCHASE,
  ADD_PURCHASE,
  EDIT_PURCHASE
} from "../types";

export default function purchase(state = [], action = {}) {
  switch (action.type) {
    case CREATE_PURCHASE:
      return [];
    case ADD_PURCHASE:
      return [...state, ...action.data];
    case EDIT_PURCHASE:
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
