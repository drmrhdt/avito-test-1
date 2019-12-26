import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../img/logo.png";
import styles from "./Header.module.scss";

class Header extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const backBtn = id ? (
      <NavLink className={styles.header__back_btn} to="/">
        Back
      </NavLink>
    ) : null;
    return (
      <div className={styles.header}>
        <NavLink to="/">
          <img className={styles.header__logo} src={logo} alt="avito-logo" />
        </NavLink>
        {backBtn}
      </div>
    );
  }
}

export default withRouter(Header);
