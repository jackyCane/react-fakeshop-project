import Article from "./Article";
import styles from "./style/ArticleList.module.scss";

const ArtcileList = function ({ data }) {
  return (
    <div className={styles.articleList}>
      {data?.map((item) => (
        <Article key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ArtcileList;
