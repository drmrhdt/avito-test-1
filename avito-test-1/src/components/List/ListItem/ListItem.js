import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ListItem.module.scss";

export default class ListItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      previewItem: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired
    })
  };

  render() {
    const { id, address, title, previewImage, price } = this.props.item;

    return (
      <div className={styles.item}>
        <Link to={`/items/${id}`}>
          <img
            className={styles.item__image}
            src={previewImage}
            title={title}
          />
        </Link>
        <div className={styles.item__text}>
          <Link to={`/items/${id}`} className={styles.item__title}>
            {title}
          </Link>
          <p className={styles.item__price}>{price}</p>
          <p className={styles.item__address}>{address}</p>
        </div>
      </div>
    );
  }
}
