import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ButtonLike from "../../UI/ButtonLike";
import ButtonCart from "../../UI/ButtonCart";

import styles from "./style/LowerHeaderButton.module.scss";

const LowerHeaderButtons = function ({ burgerButton }) {
  const [cartLength, setCartLength] = useState(0);
  const cart = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    setCartLength(cart?.length);
  }, [cart?.length]);
  return (
    <div className={styles.lowerHeaderButtons}>
      <ButtonLike />
      <Link className={styles.buttonsCart} to="/cart">
        <ButtonCart onClick={burgerButton}>
          <div className={styles.cartCounter}>{cartLength}</div>
        </ButtonCart>
      </Link>
    </div>
  );
};
export default LowerHeaderButtons;
