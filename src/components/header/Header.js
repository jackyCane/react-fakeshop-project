import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "../../UI/BurgerButton";

import Button from "../../UI/Button";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";

import styles from "./style/Header.module.scss";

const Header = function ({ icon, showPopupHandler }) {
  const [inputActive, setInputActive] = useState(false);
  const [headerNav, setHeaderNav] = useState(false);

  const burgerButtonHandler = function () {
    setHeaderNav(!headerNav);
    if (!headerNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };
  const burgerButtonClose = function () {
    setHeaderNav(false);
  };
  return (
    <div className={styles.header}>
      <div className={styles.upperHeader}>
        <div className={styles.burgerButton}>
          <BurgerButton
            addClass={headerNav ? styles.burgerButton__active : ""}
            onClick={burgerButtonHandler}
          />
        </div>
        <div className={styles.upperHeader__logo}>
          <Link to="/" className={styles.upperHeader__logo__link}>
            <img src={icon} />
          </Link>
        </div>
        <div className={styles.upperHeader__signInBtn}>
          <Button
            onClick={() => showPopupHandler(true)}
            addClass={styles.signInBtn__btn}
          >
            Sign In
          </Button>
        </div>
      </div>
      <div
        className={
          headerNav
            ? `${styles.lowerHeader} ${styles.lowerHeader__active}`
            : styles.lowerHeader
        }
      >
        <HeaderNav headerNav={headerNav} burgerButton={burgerButtonClose} />
        <HeaderMenu
          burgerButton={burgerButtonClose}
          inputActive={inputActive}
          setInputActive={setInputActive}
        />
      </div>
    </div>
  );
};
export default Header;
