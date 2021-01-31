import { Action } from "./types";
import { SET_PERSON_SEARCH } from "./actionTypes";
import personData from "../constants /data.json";
const initialState = { currentPersons: personData };

// loading can definitely be faster bc loading all at once
// would implement lazy-loading given more time

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
