import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "Post";
  let [title, titleFn] = useState("TITLE");

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "blue", fontSize: "30px" }}>React blog</div>
      </div>
      <h4>{post}</h4>
      <h3>{title}</h3>
      <img src={logo} alt="LOGO"></img>
    </div>
  );
}

export default App;
