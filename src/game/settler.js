import { ADD_SETTLER } from "./actions";

const settler = {
  name: "Fran"
};

export const initialState = {
  amount: 1,
  list: [settler]
};

export const settlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SETTLER:
      return {
        ...state,
        amount: state.amount + action.payload
      };
    default:
      return state;
  }
};

export const addSettler = (amount = 1) => ({
  type: ADD_SETTLER,
  payload: amount
});
