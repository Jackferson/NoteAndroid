import React from "react";

import { SET_LOADING, UPDATE_USER_DATA } from "./rules";
import UserContext from "./UserContext";
import contextReducer from "./contextReducer";

const userState = (prop) => {
  const initialState = {
    user: null,
    loading: false,
  };

  const [state, dispatch] = React.useReducer(contextReducer, initialState);

  const updateUser = async (data) => {
    try {
      dispatch({ rule: UPDATE_USER_DATA, payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const setLoading = async (value) => {
    try {
      dispatch({ rule: SET_LOADING, payload: value });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        updateUser,
        setLoading,
      }}
    >
      {prop.children}
    </UserContext.Provider>
  );
};

export default userState;