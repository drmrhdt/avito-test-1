import React, { Component } from "react";
import styles from "./ListItem.module.scss";

export default class ListItem extends Component {
  render() {
    const { id, address, title, previewImage, price } = this.props.item;

    return (
      <div className={styles.item}>
        <img className={styles.item__image} src={previewImage} />
        <div className={styles.item__text}>
          <p className={styles.item__title}>{title}</p>
          <p className={styles.item__price}>{price}</p>
          <p className={styles.item__address}>{address}</p>
        </div>
      </div>
    );
  }
}
