import {
  FETCH_MASTER_DATA
} from "../types";

export default function master(state = [], action = {}) {
  switch (action.type) {
    case FETCH_MASTER_DATA:
      return action.master.data;
    default:
      return state;
  }
}
