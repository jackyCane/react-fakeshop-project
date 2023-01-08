import Button from "../../UI/Button";
import CartItem from "./CartItem";
import styles from "./style/CartList.module.scss";

const CartList = function ({ clear, cart, deleteFromCart }) {
  return (
    <div>
      <div className={styles.cartList}>
        {cart?.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
      <Button extrastyles={true} onClick={clear}>
        Clear
      </Button>
    </div>
  );
};
export default CartList;
