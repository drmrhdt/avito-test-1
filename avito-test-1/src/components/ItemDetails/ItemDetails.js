import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
    images: [],
    isLoading: false
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.setState({ isLoading: true });
    const item = await getItem(id);
    this.setState({ isLoading: false });
    this.setState({ ...item[0] });
  }
  render() {
    const {
      address,
      title,
      price,
      description,
      sellerName,
      images,
      isLoading
    } = this.state;

    return (
      <div className={styles.details}>
        {isLoading ? (
          <div className={styles.skeleton}>
            <div className={styles.skeleton__button}>button</div>
            <div className={styles.skeleton__details}>
              <div className={styles.skeleton__slider_gallery}>
                <div className={styles.skeleton__slider}>slider</div>
                <div className={styles.skeleton__gallery}>
                  <div className={styles.skeleton__gallery_item}>item</div>
                  <div className={styles.skeleton__gallery_item}>item</div>
                  <div className={styles.skeleton__gallery_item}>item</div>
                  <div className={styles.skeleton__gallery_item}>item</div>
                </div>
              </div>
              <div className={styles.skeleton__text}>
                <div className={styles.skeleton__text_sm}>title</div>
                <div className={styles.skeleton__text_xs}>price</div>
                <div className={styles.skeleton__text_m}>description</div>
                <div className={styles.skeleton__text_sm}>address</div>
                <div className={styles.skeleton__text_xs}>seller</div>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}
