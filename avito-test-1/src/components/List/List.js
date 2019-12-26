import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
