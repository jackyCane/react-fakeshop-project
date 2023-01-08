import Button from "../../UI/Button";
import ButtonLike from "../../UI/ButtonLike";
import ButtonCart from "../../UI/ButtonCart";

import { useState } from "react";
import { useEffect } from "react";

import styles from "./style/Item.module.scss";

const Item = function ({ item, addToCart }) {
  const [checked, setChecked] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setChecked(false);
    cart.forEach((checkedItem) => {
      if (checkedItem.id === item.id) setChecked(true);
    });
  }, [cart]);

  item = {
    id: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    description: item.description,
    image: item.image,
    counter: 1,
  };

  const addToCartItem = function (cartItem, id) {
    addToCart(cartItem, id);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={item.image} />
      </div>
      <div className={styles.item__text}>
        <div className={styles.item__header}>
          <div className={styles.item__title}>{item.title}</div>
          <div className={styles.item__category}>
            {item.category.toUpperCase()}
          </div>
        </div>
        <div className={styles.item__dscr}>
          {item
            ? item?.description[0].toUpperCase() + item.description.slice(1)
            : ""}
        </div>
        <div className={styles.item__price}>
          <Button extrastyles={true} addClass={styles.price__btn}>
            {item.price} $
          </Button>
          <div className={styles.item__options}>
            <div onClick={() => addToCartItem(item)}>
              <ButtonCart addClassCart={checked ? styles.checked : ""} />
            </div>
            <div className={styles.item__added}>
              <div className={checked ? styles.addedActive : styles.added}>
                Added
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
