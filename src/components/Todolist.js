import React, { Component } from "react";
import Item from "./Todoitem";

class Todolist extends Component {
  render() {
    return (
      <section>
        <h2>hello from to do item</h2>
        <Item />
      </section>
    );
  }
}

export default Todolist;
