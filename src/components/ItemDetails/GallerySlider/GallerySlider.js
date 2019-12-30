import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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

  next = () => {
    const { images } = this.props;
    this.setState(prevState => ({
      selected: (prevState.selected + 1) % images.length
    }));
  };

  prev = () => {
    const { images } = this.props;
    this.state.selected === 0
      ? this.setState({ selected: images.length - 1 })
      : this.setState(prevState => ({
          selected: (prevState.selected - 1) % images.length
        }));
  };

  setImageFromGalleryToSlider = e => {
    this.setState({ selected: e.currentTarget.dataset.index });
  };

  render() {
    const { images, title } = this.props;
    const { selected } = this.state;
    return (
      <div>
        <div className={styles.slider}>
          <button
            className={classNames(styles.slider__btn, styles.slider__btn_prev)}
            onClick={this.prev}
          ></button>
          <img
            className={styles.slider__image}
            src={images[selected]}
            alt={title}
          />
          <button
            className={classNames(styles.slider__btn, styles.slider__btn_next)}
            onClick={this.next}
          ></button>
        </div>
        <ul className={styles.gallery}>
          {images &&
            images.map((image, index) => (
              <li
                className={classNames(
                  styles.gallery__item,
                  index === +selected ? styles.selected : styles.not_selected
                )}
                key={image}
                title={title}
              >
                <img
                  className={styles.gallery__image}
                  src={image}
                  alt={title}
                  data-index={index}
                  onMouseOver={this.setImageFromGalleryToSlider}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
