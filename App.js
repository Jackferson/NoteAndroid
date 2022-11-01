import React from "react";
import ContextState from "./context/ContextState";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <ContextState>
      <MainPage />
    </ContextState>
  );
}
