import React, { Component } from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

export default class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul className={styles.list}>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
