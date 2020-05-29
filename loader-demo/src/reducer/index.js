import { combineReducers } from "redux";
import { modal } from "./modalReducer";

const list = (state = [], action) => {
  switch (action.type) {
    case "LIST":
      return [...action.data];

    default:
      return state;
  }
};

const loader = (state = false, action) => {
  switch (action.type) {
    case "LOADER":
      return action.show;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  list,
  modal,
  loader,
});

export default rootReducer;
