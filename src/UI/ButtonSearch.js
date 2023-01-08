import { AiOutlineSearch } from "react-icons/ai";
import styles from "./style/ButtonSearch.module.scss";

const ButtonSearch = function () {
  return (
    <button type="submit" className={styles.searchButton}>
      <AiOutlineSearch />
    </button>
  );
};
export default ButtonSearch;
