import { ADD_SETTLER, SET_JOB } from "./actions";

const settler = {
  id: 0,
  name: "Fran",
  job: null
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
    case SET_JOB:
      return {
        ...state,
        list: state.list.map((settler) => {
          if (settler.id !== action.payload.id) return settler;

          return { ...settler, job: action.payload.job };
        })
      };
    default:
      return state;
  }
};

export const addSettler = (amount = 1) => ({
  type: ADD_SETTLER,
  payload: amount
});

export const setJob = (id, job) => ({
  type: SET_JOB,
  payload: {
    id,
    job
  }
});
