import React from "react";
import { Text, StyleSheet } from "react-native";

const Clicker = ({handler, name}) => {
  return <Text style={styles.text} onPress={handler}>{name.toString()}</Text>;
};

const styles = StyleSheet.create({
  text: {
    shadowColor: "olive",
    elevation: 5,
    paddingTop: 5,
    marginHorizontal: 20,
    marginTop: 10,
    width: 100,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "maroon",
    backgroundColor: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
    color: "gainsboro",
  },
});

export default Clicker;
