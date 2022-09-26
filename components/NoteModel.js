import React from "react";
import { Text, StyleSheet, View } from "react-native";
import TitleBox from "./TitleBox";

const NoteModel = ({ item, handleDelete }) => {
  return (
    <View style={styles.box}>
      <TitleBox item={item} handleDelete={handleDelete}/>
      <Text style={styles.text} numberOfLines={6} ellipsizeMode="tail">
        {item.content}
      </Text>
    </View>
  );
};

export default NoteModel;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "teal",
    paddingHorizontal: 20,
    overflow: "visible",
    paddingTop: 20,
    fontStyle: "italic",
    backgroundColor: "lightblue",
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  box: {
    shadowColor: "red",
    elevation: 5,
    height: 250,
    margin: 10,
    marginHorizontal: 25,
    backgroundColor: "beige",
    borderWidth: 1.5,
    borderRadius: 30,
  },
});
