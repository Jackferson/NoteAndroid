import React from "react";
import NotesList from "./NotesList.js";
import Layout from "./Layout";

const FrontPage = () => {
  return (
    <Layout>
      <NotesList />
    </Layout>
  );
};

export default FrontPage;
