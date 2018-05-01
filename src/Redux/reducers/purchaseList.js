import {
  FETCH_PURCHASE_LIST
} from "../types";

export default function purchase(state = [], action = {}) {
  switch (action.type) {
    case FETCH_PURCHASE_LIST:
      return action.data;  
    default:
      	return state;
  }
}
