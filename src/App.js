import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
// git continuous deployment

function App() {
  return (
    <div className="container">
      <div className="row">
        <Todoinput />
        <Todolist />
      </div>
    </div>
  );
}

export default App;
