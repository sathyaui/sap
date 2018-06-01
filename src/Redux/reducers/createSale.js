import { map } from 'lodash';
import {
  CREATE_SALE
} from "../types";

export default function sales(state = [], action = {}) {
  switch (action.type) {
    case CREATE_SALE:
      return [];
    default:
      	return state;
  }
}
