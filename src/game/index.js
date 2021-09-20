import { dayReducer } from "./day";
import { resourcesReducer } from "./resources";
import { settlerReducer } from "./settler";

export const reducer = (state = {}, action) => {
  return {
    day: dayReducer(state.day, action),
    settlers: settlerReducer(state.settlers, action),
    resources: resourcesReducer(state.resources, action)
  };
};
