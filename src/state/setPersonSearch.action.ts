import { SET_PERSON_SEARCH } from "./actionTypes";
import { Person } from "./types";

export const setPersonSearch = (filteredResult: Person[]) => {
  return {
    type: SET_PERSON_SEARCH,
    payload: filteredResult,
  };
};
