import FooterLink from "./FooterLink";
import JoinUs from "../joinus/JoinUs";
import Section from "../Section";

import styles from "./style/Footer.module.scss";
import iconJoinUs from "../../img/iconJoinUs.png";

const Footer = function ({ scrollUp, showPopupHandler }) {
  const footerLinks = ["categories", "delievery", "contact"];
  return (
    <>
      <Section title={"Nevermore Membership"}>
        <JoinUs icon={iconJoinUs} showPopupHandler={showPopupHandler} />
      </Section>
      <div className={styles.footer}>
        <div className={styles.footer__title}>
          <p>Nevermore</p>
        </div>
        <div className={styles.footer__linksAndLogo}>
          <ul className={styles.footer__links}>
            {footerLinks.map((link) => (
              <FooterLink key={link} scrollUp={scrollUp} link={link} />
            ))}
          </ul>
          <div className={styles.footer__logo}>
            <img src={iconJoinUs} />
          </div>
        </div>
        <div className={styles.footer__inc}>
          © 2022 Nevermore, Inc. All Rights Reserved
        </div>
      </div>
    </>
  );
};
export default Footer;
