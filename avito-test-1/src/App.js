import React, { Component } from "react";
import List from "./components/List";
import { BrowserRouter, Route } from "react-router-dom";
import { getItems, getItem } from "./utilities/fetch";
import styles from "./App.module.scss";

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
      <BrowserRouter>
        <div className={styles.App}>
          <Route path="/">
            <List items={items} />
          </Route>
          <Route path="/items/:id"></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
