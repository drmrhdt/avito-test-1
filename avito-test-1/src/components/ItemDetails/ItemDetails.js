import React, { Component } from "react";
import PropTypes from "prop-types";
import { getItem } from "../../utilities/fetch";
import styles from "./ItemDetails.module.scss";

export default class ItemDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    address: "",
    title: "",
    price: "",
    description: "",
    sellerName: "",
    images: []
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const item = await getItem(id);
    this.setState({ ...item[0] });
  }
  render() {
    const {
      address,
      title,
      price,
      description,
      sellerName,
      images
    } = this.state;

    return (
      <div className={styles.details}>
        <div className={styles.details__slider} images={images}>
          Gallery and slider
        </div>
        <div className={styles.details__text}>
          <p>{title}</p>
          <p>{price}</p>
          <p>{description}</p>
          <p>{address}</p>
          <p>{sellerName}</p>
        </div>
      </div>
    );
  }
}
