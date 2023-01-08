import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import styles from "./style/UpperHeader.module.scss";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import styles1 from "./style/LowerHeader.module.scss";

const UpperHeader = function ({ icon, showPopupHandler }) {
  const [inputActive, setInputActive] = useState(false);
  return (
    <>
      <div className={styles.upperHeader}>
        <div className={styles.upperHeader__logo}>
          <Link to="/">
            <img src={icon} />
          </Link>
        </div>
        <div className={styles.upperHeader__btns}>
          <Button addClass={styles.btns__btn}>Log In</Button>
          <p className={styles.btns__stick}>|</p>
          <Button
            onClick={() => showPopupHandler(true)}
            addClass={styles.btns__btn}
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className={styles1.lowerHeader}>
        <HeaderNav />
        <HeaderMenu inputActive={inputActive} setInputActive={setInputActive} />
      </div>
    </>
  );
};
export default UpperHeader;
