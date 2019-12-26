import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    const { id, address, title, previewImage, price } = this.props.item;

    return (
      <div>
        <img src={previewImage} />
        <p>{title}</p>
        <p>{price}</p>
        <p>{address}</p>
      </div>
    );
  }
}
