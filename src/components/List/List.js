import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

export default class List extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    items: []
  };

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
