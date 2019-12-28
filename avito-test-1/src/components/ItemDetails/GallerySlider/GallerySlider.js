import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./GallerySlider.module.scss";

export default class GallerySlider extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    images: []
  };

  state = {
    selected: 0
  };

  render() {
    const { images, title } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <div className={styles.slider}>
          <button className={styles.slider__btn}>{"<"}</button>
          <img
            className={styles.slider__image}
            src={images[selected]}
            alt={title}
          />
          <button className={styles.slider__btn}>{">"}</button>
        </div>
        <ul className={styles.gallery}>
          {images.map(image => (
            <li className={styles.gallery__item} key={image} title={title}>
              <img className={styles.gallery__image} src={image} alt={title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
