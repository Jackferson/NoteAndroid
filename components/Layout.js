import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="#001830"
        barStyle={"light-content"}
        hidden={false}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});

export default Layout;
