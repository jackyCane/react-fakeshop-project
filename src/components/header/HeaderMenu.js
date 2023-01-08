import HeaderForm from "./HeaderForm";
import LowerHeaderButtons from "./LowerHeaderButton";
import styles from "./style/HeaderMenu.module.scss";

const HeaderMenu = function ({ inputActive, setInputActive, burgerButton }) {
  return (
    <div
      className={
        inputActive
          ? `${styles.headerMenu} ${styles.headerMenu__active}`
          : styles.headerMenu
      }
    >
      <HeaderForm inputActive={inputActive} setInputActive={setInputActive} />
      {!inputActive && <LowerHeaderButtons burgerButton={burgerButton} />}
    </div>
  );
};
export default HeaderMenu;
