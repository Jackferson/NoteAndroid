import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import FrontPage from "./FrontPage";
import NoteForm from "./NoteForm";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={FrontPage} />
        <Tab.Screen name="New Note" component={NoteForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;
