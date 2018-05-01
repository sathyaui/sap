import {
  CREATE_TAG
} from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case CREATE_TAG:
      return action.data;
    default:
      return state;
  }
}
