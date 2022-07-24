import { ACTION_TYPE } from "../util/constants";

const initialState = {
  loading: true,
  user: {},
  error: null,
  message: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPE.USER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case ACTION_TYPE.USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_TYPE.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ACTION_TYPE.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case ACTION_TYPE.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPE.USER_LOGIN:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case ACTION_TYPE.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case ACTION_TYPE.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
