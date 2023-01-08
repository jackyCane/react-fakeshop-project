import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import styles from "./style/DividedPart.module.scss";

const DividedPart = function ({
  img,
  categorie,
  description,
  selectable,
  categorieLoader,
}) {
  return (
    <>
      <Link
        onClick={() => categorieLoader(categorie)}
        to="/categories/products"
        className={
          selectable
            ? `${styles.dividedPart} ${styles.selected}`
            : styles.dividedPart
        }
      >
        <div className={selectable ? styles.blur : ""}></div>
        <img src={img} />
        <div className={styles.dividedPart__dscr}>
          <p className={styles.dividedPart__title}>{description}</p>
          <Button extrastyles={"true"} addClass={styles.dividedPart__btn}>
            Shop
          </Button>
        </div>
      </Link>
    </>
  );
};
export default DividedPart;
