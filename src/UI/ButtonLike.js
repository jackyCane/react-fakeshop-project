import Button from "./Button";
import { AiFillHeart } from "react-icons/ai";
import styles from "./style/ButtonLike.module.scss";

const ButtonLike = function () {
  return (
    <Button addClass={styles.likeButton}>
      <AiFillHeart />
    </Button>
  );
};
export default ButtonLike;
