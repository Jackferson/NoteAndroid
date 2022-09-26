import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const TitleBox = ({ item, handleDelete }) => {
  const [hidden, setHidden] = useState(true);
  const toggleElements = () => {
    setHidden(!hidden);
  };

  return (
    <View style={styles.titleBox}>
      {hidden ? null : <Text style={styles.options}>{item.group}</Text>}
      <Text style={styles.name} onPress={toggleElements}>
        {item.name}
      </Text>
      {hidden ? null : (
        <Text style={styles.options} onPress={() => handleDelete(item._id)}>
          Delete
        </Text>
      )}
    </View>
  );
};

export default TitleBox;

const styles = StyleSheet.create({
  titleBox: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "rgba(100,100,100,0.2)",
    borderTopColor: "white",
    borderTopWidth: 0.4,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  options: {
    fontSize: 20,
    color: "teal",
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    color: "teal",
    fontWeight: "bold",
    textDecorationLine: "line-through",
    marginRight: 1,
  },
});
