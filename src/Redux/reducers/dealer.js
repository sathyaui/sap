import {
  FETCH_DEALER
} from "../types";

export default function dealer(state = {}, action = {}) {
  switch (action.type) {
    case FETCH_DEALER:
      return action.dealer.data;
    default:
      return state;
  }
}
