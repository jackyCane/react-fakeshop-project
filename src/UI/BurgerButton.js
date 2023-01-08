import Button from "./Button";
import styles from "./style/BurgerButton.module.scss";

const BurgerButton = function ({ onClick, addClass }) {
  return (
    <button onClick={onClick} className={`${styles.burgerButton} ${addClass}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
export default BurgerButton;
