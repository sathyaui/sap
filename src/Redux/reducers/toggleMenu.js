import {
  TOGGLE_MENU
} from "../types";

export default function master(state = { open: false }, action = {}) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {open:action.status};
    default:
      return state;
  }
}
