import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../UI/Spinner";
import ArtcileList from "../article/ArticleList";
import Section from "../Section";

import styles from "./style/Results.module.scss";

const Results = function () {
  const { params } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter(
        (item) =>
          item.title.toLowerCase().split(" ").indexOf(`${params}`) !== -1 ||
          item.category.toLowerCase().split(" ").indexOf(`${params}`) !== -1
      )
    );
  }, [data, params]);
  return (
    <Section title={`Search results by word: "${params}"`}>
      <div className={styles.results}>
        {isLoading && <Spinner />}
        {!isLoading && <ArtcileList data={filteredData} />}
        {!isLoading && filteredData?.length === 0 && (
          <h2>No results found. Try again ...</h2>
        )}
      </div>
    </Section>
  );
};

export default Results;
