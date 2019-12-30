import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import styles from "./Header.module.scss";

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink to="/">
          <img className={styles.header__logo} src={logo} alt="avito-logo" />
        </NavLink>
      </div>
    );
  }
}

export default Header;
