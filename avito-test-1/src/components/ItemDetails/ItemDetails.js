import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import GallerySlider from "./GallerySlider";
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
        <>
          <NavLink className={styles.details_btn_back} to="/">
            Назад
          </NavLink>
          <div className={styles.details__content}>
            <GallerySlider
              className={styles.details__slider}
              images={images}
              title={title}
            />
            <div className={styles.details__text}>
              <h1 className={styles.details__title}>{title}</h1>
              <h2 className={styles.details__price}>{price}</h2>
              <h3>Подробное описание:</h3>
              <p>{description}</p>
              <p>{address}</p>
              <p className={styles.details__seller_name}>{sellerName}</p>
            </div>
          </div>
        </>
      </div>
    );
  }
}
