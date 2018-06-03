import {
  GET_LOGIN
} from "../types";

export default function tag(state = [], action = {}) {
  switch (action.type) {
    case GET_LOGIN:
      return action.data;
    default:
      return state;
  }
}
