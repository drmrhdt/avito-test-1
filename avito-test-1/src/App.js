import React, { Component } from "react";
import List from "./components/List";
import { getItems, getItem } from "./utilities/fetch";
import "./App.css";

class App extends Component {
  state = {
    items: []
  };

  async componentDidMount() {
    const items = await getItems();
    this.setState({ items: items });
    const item = await getItem(1837300862);
    console.log(item);
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <List items={items} />
      </div>
    );
  }
}

export default App;
