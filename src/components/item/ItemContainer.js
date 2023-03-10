import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../UI/Spinner";
import Item from "./Item";
import Section from "../Section";

import styles from "./style/ItemContainer.module.css";

import { scrollUp } from "../../helper/helperFunctions";

const ItemContainer = function ({ addToCart, cart }) {
  useEffect(scrollUp, []);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    try {
      (async function () {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      })();
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <Section>
      <div className={styles.itemContainer}>
        {item == undefined ? (
          <Spinner />
        ) : (
          <Item item={item} cart={cart} addToCart={addToCart} />
        )}
      </div>
    </Section>
  );
};
export default ItemContainer;
