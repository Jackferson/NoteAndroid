import { SET_LOADING, UPDATE_USER_DATA } from "./rules";

export default (state, action) => {
  const { payload, rule } = action;

  switch (rule) {
    case UPDATE_USER_DATA:
      return { ...state, user: payload };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
