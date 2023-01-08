import styles from "./style/Button.module.scss";

const Button = function ({ children, addClass = "", onClick, extrastyles }) {
  return (
    <button
      onClick={onClick}
      className={`${
        extrastyles ? `${styles.button} ${styles.extraStyles}` : styles.button
      } ${addClass}`}
    >
      {children}
    </button>
  );
};
export default Button;
