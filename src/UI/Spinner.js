import styles from "./style/Spinner.module.scss";

const Spinner = function () {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
