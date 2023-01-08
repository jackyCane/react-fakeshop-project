import styles from "./style/FooterLink.module.scss";
import { Link } from "react-router-dom";

const FooterLink = function ({ link, scrollUp }) {
  return (
    <li onClick={scrollUp} className={styles.footer__link}>
      <Link to={`/${link}`} className={styles.footer__item} href="">
        {link.toUpperCase()}
      </Link>
    </li>
  );
};
export default FooterLink;
