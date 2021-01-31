import { Action } from "./types";
import { SET_PERSON_SEARCH } from "./actionTypes";
import personData from "../constants /data.json";
const initialState = { currentPersons: personData };

// loading is definitely not fast bc loading all at once
// need to implement lazy-loading

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PERSON_SEARCH:
      const currentPersons = action.payload;
      return {
        ...state,
        currentPersons,
      };

    default:
      return state;
  }
};
export default reducer;
