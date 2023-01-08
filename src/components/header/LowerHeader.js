import { useState, useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import styles from "./style/LowerHeader.module.scss";

const LowerHeader = function () {
  const [inputActive, setInputActive] = useState(false);
  return (
    <div className={styles.lowerHeader}>
      <HeaderNav />
      <HeaderMenu inputActive={inputActive} setInputActive={setInputActive} />
    </div>
  );
};
export default LowerHeader;
