import styles from "./style/Article.module.scss";
import { Link } from "react-router-dom";

const Article = function ({ item }) {
  return (
    <Link to={`/categories/products/${item.id}`} className={styles.article}>
      <div className={styles.article__image}>
        <img src={item.image} />
      </div>
      <div className={styles.article__dscr}>
        <div className={styles.article__title}>
          <p>{item.title}</p>
        </div>
        <div className={styles.article__price}>
          <p>{item.price} $</p>
        </div>
      </div>
    </Link>
  );
};
export default Article;
