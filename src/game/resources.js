import { ADD_RESOURCE, SUBSTRACT_RESOURCE } from "./actions";

export const initialState = {};

export const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESOURCE: {
      const { name, amount } = action.payload;

      return {
        ...state,
        [name]: state[name] ? state[name] + amount : amount
      };
    }
    case SUBSTRACT_RESOURCE: {
      const { name, amount } = action.payload;

      return {
        ...state,
        [name]: state[name] ? state[name] - amount : 0
      };
    }
    default:
      return state;
  }
};

export const addResource = (name, amount) => ({
  type: ADD_RESOURCE,
  payload: {
    name,
    amount
  }
});

export const substractResource = (name, amount) => ({
  type: SUBSTRACT_RESOURCE,
  payload: {
    name,
    amount
  }
});
