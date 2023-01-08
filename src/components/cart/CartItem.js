import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import ButtonCancel from "../../UI/ButtonCancel";
import styles from "./style/CartItem.module.scss";

const CartItem = function ({ item, deleteFromCart }) {
  const [counter, setCounter] = useState(item.counter);

  const changeQuantity = function (value) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartItem = cart.find((cartItem) => cartItem.id === item.id);
    value ? cartItem.counter++ : cartItem.counter--;
    if (cartItem.counter === 0) {
      return;
    }
    item.counter = cartItem.counter;
    cart = cart.map((item) => {
      if (item.id === cartItem.id) {
        item = cartItem;
      }
      return item;
    });
    setCounter(cartItem.counter);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className={styles.cart}>
      <Link
        to={`/categories/products/${item.id}`}
        className={styles.cart__link}
      >
        <div className={styles.cart__img}>
          <img src={item.image} />
        </div>
        <div className={styles.cart__descr}>
          <div className={styles.cart__title}>{item.title}</div>
          <div className={styles.cart__counter}>x{counter}</div>
        </div>
      </Link>
      <div className={styles.cart__options}>
        <div className={styles.options__price}>
          {item.price * item.counter}$
        </div>
        <div className={styles.options__quantity}>
          <button
            className={styles.quantity__btn}
            onClick={() => changeQuantity(true)}
          >
            +
          </button>
          <button
            className={styles.quantity__btn}
            onClick={() => changeQuantity(false)}
          >
            -
          </button>
        </div>
        <ButtonCancel onClick={() => deleteFromCart(item.id)}></ButtonCancel>
      </div>
    </div>
  );
};
export default CartItem;
