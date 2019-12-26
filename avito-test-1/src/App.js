import React, { Component } from "react";
import List from "./components/List";
import Header from "./components/Header";
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
          <Route exact path="/">
            <Header />
            <List items={items} />
          </Route>
          <Route path="/items/:id">
            <Header />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
