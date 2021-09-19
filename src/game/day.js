import { ADD_DAY } from "./actions";

export const initialState = 1;

export const dayReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DAY:
      return state + 1;
    default:
      return state;
  }
};

export const addDay = () => ({ type: ADD_DAY });
