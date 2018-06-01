import { map, filter } from 'lodash';
import { FETCH_TAG_LIST } from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case FETCH_TAG_LIST:
      return action.data;
    default:
      return state;
  }
}
