import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
// git continuous deployment

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      item: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };
  clearList = () => {
    console.log("clearList");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle Edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo intput</h3>
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.handleEdit}
            />
            <Todolist
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
