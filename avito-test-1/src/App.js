import React, { Component } from "react";
import { getItems, getItem } from "./utilities/fetch";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const items = await getItems();
    console.log(items);
    const item = await getItem(1837300862);
    console.log(item);
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
