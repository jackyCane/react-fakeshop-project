import styles from "./style/News.module.scss";

const News = function ({ description, link }) {
  return (
    <li className={styles.newsItem}>
      <p className={styles.newsItem__dscr}>{description}</p>
      <a className={styles.newsItem__link} href="#">
        {link}
      </a>
    </li>
  );
};
export default News;
