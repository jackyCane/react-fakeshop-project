import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styles from "./style/Slide.module.scss";

const Slide = forwardRef(({ item }, ref) => {
  return (
    <div ref={ref} className={styles.slideContainer}>
      <Link to={`/categories/products/${item.id}`} className={styles.slide}>
        <div className={styles.slide__item}>
          <div className={styles.slide__image}>
            <img src={item.image} />
          </div>
        </div>
        <div className={styles.slide__text}>
          <p className={styles.slide__hot}>Hot</p>
          <p className={styles.slide__title}>{item.title}</p>
          <p className={styles.slide__category}>{item.category}</p>
          <p className={styles.slide__price}>$ {item.price}</p>
        </div>
      </Link>
    </div>
  );
});
export default Slide;
