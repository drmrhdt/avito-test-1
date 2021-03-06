import React, { Component } from "react";
import List from "./components/List";
import Header from "./components/Header";
import ItemDetails from "./components/ItemDetails";
import { BrowserRouter, Route } from "react-router-dom";
import { getItems } from "./utilities/fetch";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    items: [],
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const items = await getItems();
    this.setState({ isLoading: false, items: items });
  }

  render() {
    const { items, isLoading } = this.state;

    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Header />
          {isLoading ? (
            "...Загрузка"
          ) : (
            <>
              <Route exact path="/" render={() => <List items={items} />} />
              <Route path="/items/:id" component={ItemDetails} />
            </>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
