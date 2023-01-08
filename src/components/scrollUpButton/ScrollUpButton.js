import styles from "./style/ScrollUpButton.module.scss";
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollUpButton = function ({ scroll, scrollUp }) {
  return (
    <button
      onClick={scrollUp}
      className={
        scroll
          ? `${styles.scrollUpButton} ${styles.scrollUpButtonActive}`
          : styles.scrollUpButton
      }
    >
      <BiUpArrowAlt />
    </button>
  );
};
export default ScrollUpButton;
