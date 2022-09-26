import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { getAllNotes, deleteNote } from "../api";
import NoteModel from "./NoteModel";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    console.log(user)
    const data = await getAllNotes();
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    await loadNotes();
    console.log("deleting");
  };

  const renderItem = ({ item }) => {
    return <NoteModel item={item} handleDelete={handleDelete} />;
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    ></FlatList>
  );
};

export default NotesList;
