import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Posts />
    </div>
  );
}

export default App;
