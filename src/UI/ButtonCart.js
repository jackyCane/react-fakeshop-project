import Button from "./Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./style/ButtonCart.module.scss";

const ButtonCart = function ({ addClassCart = "", children, onClick }) {
  return (
    <Button onClick={onClick} addClass={`${styles.cartButton} ${addClassCart}`}>
      <BsFillBagCheckFill />
      {children}
    </Button>
  );
};
export default ButtonCart;
