import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Section from "../Section";
import Spinner from "../../UI/Spinner";
import ArtcileList from "../article/ArticleList";

import styles from "./style/Products.module.scss";

const Products = function ({ scrollUp, categorie }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => scrollUp(), []);

  useEffect(() => {
    if (!categorie) {
      navigate("/categories");
    }
  }, [categorie]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categorie}`
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {categorie && (
        <div className={styles.products}>
          <div className={styles.products__title}>
            <p>{categorie.toUpperCase()}</p>
          </div>
          <Section>
            <div className={styles.products__list}>
              {isLoading && <Spinner />}
              {!isLoading && <ArtcileList data={data} />}
            </div>
          </Section>
        </div>
      )}
    </>
  );
};
export default Products;
