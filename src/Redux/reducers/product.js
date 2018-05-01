import {
  FETCH_PRODUCT
} from "../types";

export default function product(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.product.data;
    default:
      return state;
  }
}
