import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import Layout from "./Layout";
import Clicker from "./Clicker";
import { createNote } from "../api";

const NoteForm = () => {
  const [note, setNote] = useState({
    name: "None",
    content: "",
    group: "Other",
  });

  const handleSubmit = async () => {
    await createNote(note);
  };

  const handleReset = () => {
    setNote({
      name: "None",
      content: "",
      group: "Other",
    });
  };

  const handleChange = (key, value) => {
    setNote({ ...note, [key]: value });
  };

  return (
    <Layout>
      <TextInput
        onChangeText={(text) => handleChange("name", text)}
        value={note.name}
        style={styles.input}
        placeholder="Name (?)"
      />
      <TextInput
        onChangeText={(text) => handleChange("content", text)}
        value={note.content}
        style={styles.contentInput}
        placeholder="Note content"
      />
      <TextInput
        onChangeText={(text) => handleChange("group", value)}
        value={note.group}
        style={styles.input}
      />
      <View style={styles.box}>
        <Clicker name="Reset" handler={handleReset} />
        <Clicker name="Submit" handler={handleSubmit} />
      </View>
    </Layout>
  );
};

export default NoteForm;

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    color: "teal",
    fontStyle: "italic",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    textAlign: "center",
    margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  contentInput: {
    fontSize: 20,
    color: "teal",
    fontStyle: "italic",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    textAlign: "center",
    margin: 12,
    borderWidth: 1,
    paddingTop: 20,
    height: 400,
    borderWidth: 1.5,
    borderRadius: 30,
    backgroundColor: "powderblue",
  },
});
