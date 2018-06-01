import { map, filter } from 'lodash';
import { FETCH_TAG_DATA_BY_ID, DELETE_TAG_DATA_BY_ID } from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case FETCH_TAG_DATA_BY_ID:
      return [...state, action.data];
    case DELETE_TAG_DATA_BY_ID:
    	const dataFiltered = filter(state, (el, i) => {
    		if(i !== action.id) {
    			return el;
    		}
    	})
    	return dataFiltered;
    default:
      return state;
  }
}
