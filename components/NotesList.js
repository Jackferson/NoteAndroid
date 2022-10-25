import React, { useEffect, useState, useContext, useCallback } from "react";
import { FlatList, RefreshControl } from "react-native";
import { getAllNotes, deleteNote } from "../api";
import NoteModel from "./NoteModel";
import UserContext from "../context/UserContext";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useContext(UserContext);
  const email = user.email;

  const loadNotes = async () => {
    const data = await getAllNotes(email);
    setNotes(data);
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadNotes();
    setRefreshing(false);
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    await loadNotes();
    console.log("deleting");
  };

  const renderItem = ({ item }) => {
    return <NoteModel item={item} handleDelete={handleDelete} />;
  };

  useEffect(() => {
    user ? loadNotes() : null;
  }, [user]);

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          colors={["#f00"]}
          refreshing={refreshing}
        />
      }
    ></FlatList>
  );
};

export default NotesList;
