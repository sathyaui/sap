import { combineReducers } from "redux";

import master from "./reducers/master";
import product from "./reducers/product";
import dealer from "./reducers/dealer";
import toggleMenu from "./reducers/toggleMenu";
import createPurchase from "./reducers/createPurchase";
import purchaseList from "./reducers/purchaseList";
import purchaseTagList from "./reducers/purchaseTagList";
import createTag from "./reducers/createTag";
import tagAddon from "./reducers/tagAddon";
import tagDataById from "./reducers/tagDataById";

export default combineReducers({
  master,
  toggleMenu,
  dealer,
  product,
  createPurchase,
  purchaseList,
  purchaseTagList,
  createTag,
  tagAddon,
  tagDataById
});
