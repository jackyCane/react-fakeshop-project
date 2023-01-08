import Button from "./Button";
import { MdCancel } from "react-icons/md";
import styles from "./style/ButtonCancel.module.scss";

const ButtonCancel = function ({ onClick }) {
  return (
    <Button onClick={onClick} addClass={styles.cancelButton}>
      <MdCancel className={styles.cancelButton__icon} />
    </Button>
  );
};
export default ButtonCancel;
