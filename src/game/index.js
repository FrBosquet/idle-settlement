import { dayReducer } from "./day";
import { settlerReducer } from "./settler";

export const reducer = (state = {}, action) => {
  return {
    day: dayReducer(state.day, action),
    settlers: settlerReducer(state.settlers, action)
  };
};
