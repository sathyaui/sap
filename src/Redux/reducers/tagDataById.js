import { map } from 'lodash';
import { FETCH_TAG_DATA_BY_ID } from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case FETCH_TAG_DATA_BY_ID:
      return action.data;
    default:
      return state;
  }
}
