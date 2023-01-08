import styles from "./style/HeaderNav.module.scss";

import { Link } from "react-router-dom";
const HeaderNav = function ({ headerNav, burgerButton }) {
  const links = [
    { path: "/", text: "Home" },
    { path: "/categories", text: "Categories" },
    { path: "/delivery", text: "Delivery" },
    { path: "/contact", text: "Contact" },
  ];
  return (
    <ul
      className={
        headerNav
          ? `${styles.headerNav} ${styles.headerNav__active}`
          : styles.headerNav
      }
    >
      {links.map((link) => (
        <Link
          onClick={burgerButton}
          className={styles.headerNav__link}
          key={link.path}
          to={link.path}
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
};
export default HeaderNav;
