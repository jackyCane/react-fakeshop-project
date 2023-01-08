import CartList from "../cart/CartList";
import Section from "../Section";
import styles from "./style/Cart.module.scss";

const Cart = function ({ clearCart, deleteFromCart }) {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div>
      <Section title={"Shopping Cart"}>
        {!cart?.length && <h2>Basket is empty</h2>}
        <div className={styles.cart}>
          {!!cart?.length && (
            <CartList
              cart={cart}
              deleteFromCart={deleteFromCart}
              clear={clearCart}
            />
          )}
        </div>
      </Section>
    </div>
  );
};
export default Cart;
