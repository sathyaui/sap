import {
  PURCHASE_TAG
} from "../types";

export default function purchase(state = [], action = {}) {
  switch (action.type) {
    case PURCHASE_TAG:
      return action.data;  
    default:
      	return state;
  }
}
