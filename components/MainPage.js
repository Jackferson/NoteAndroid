import React, { useContext } from "react";
import HomeNavigator from "./HomeNavigator";
import Logger from "./OAuth";
import UserContext from "../context/UserContext";
import LoadingScreen from "./LoadingScreen";

const MainPage = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      {user === null && !loading && <Logger />}
      {(user && loading === false) && <HomeNavigator />}
    </>
  );
};

export default MainPage;
