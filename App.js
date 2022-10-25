import React from "react";
import ContextState from "./context/ContextState";
import MainPage from "./components/MainPage";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ContextState>
      
      <MainPage />
    </ContextState>
  );
}