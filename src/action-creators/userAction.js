import { _GET, _POST } from "../services/axios.method";
import { ACTION_TYPE } from "../util/constants";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ACTION_TYPE.GET_USER_REQUEST });

    const { data } = await _GET("user");
    if (data) {
      dispatch({ type: ACTION_TYPE.GET_USER_SUCCESS, payload: data.user });
    }
  } catch (err) {
    dispatch({ type: ACTION_TYPE.GET_USER_FAILURE, payload: err });
  }
};

export const onLogin = (values) => async (dispatch) => {
  try {
    dispatch({ type: ACTION_TYPE.USER_LOADING });

    const data = await _POST("login", values);
    console.log("data", data);
    // console.log("data.data.success", data.data.success);
    if (data && data.data && data.data.success) {
      dispatch({ type: ACTION_TYPE.GET_USER_SUCCESS, payload: data.data });
      dispatch({ type: ACTION_TYPE.USER_MESSAGE, payload: data.data.message });
      return true;
    } else if (data.status === 400) {
      dispatch({
        type: ACTION_TYPE.GET_USER_FAILURE,
        payload: "User Not Found",
      });
    }
  } catch (err) {
    dispatch({ type: ACTION_TYPE.GET_USER_FAILURE, payload: "err" });
  }
};
