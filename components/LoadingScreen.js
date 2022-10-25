import React, { useContext, useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import UserContext from "../context/UserContext";

const LoadingScreen = () => {
  const { setLoading, loading } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      <ActivityIndicator size="large" color="#0000ff" style={styles.init} />
    </>
  );
};

const styles = StyleSheet.create({
  init: {
    fontSize: 28,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default LoadingScreen;
