import { ActionType } from "../types";

const initialState = {
  loading: {
    state: false,
    buttonFlag: "",
  },
};
export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_STATE:
      return {
        ...state,
        loading: { ...action.payload },
      };
    default:
      return state;
  }
};
