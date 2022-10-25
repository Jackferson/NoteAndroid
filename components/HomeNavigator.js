import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import FrontPage from "./FrontPage";
import NoteForm from "./NoteForm";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <Tab.Navigator>
          <Tab.Screen name="Home" children={() => <FrontPage />} />
          <Tab.Screen name="New Note" children={() => <NoteForm />} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default HomeNavigator;
