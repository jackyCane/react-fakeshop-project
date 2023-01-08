// style
import styles from "./App.module.scss";

// React Hooks
import { useEffect, useState } from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/header/Header";
import Popup from "./components/popup/Popup";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Products from "./components/pages/Products";
import Delivery from "./components/pages/Delivery";
import Cart from "./components/pages/Cart";
import ItemContainer from "./components/item/ItemContainer";
import Results from "./components/pages/Results";
import Footer from "./components/footer/Footer";
import NewsBar from "./components/news/NewsBar";
import news from "./data/news";

// Helper
import { scrollUp } from "./helper/helperFunctions";

//Images
import { popupImages } from "./data/popupImages";
import iconSmall from "./img/iconSmall.png";
import Contact from "./components/pages/Contact";
import ScrollUpButton from "./components/scrollUpButton/ScrollUpButton";

function App() {
  const [scroll, setScroll] = useState(false);
  const [cart, setCart] = useState([]);
  const [categorie, setCategorie] = useState(
    JSON.parse(localStorage.getItem("categorie"))
  );
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    const scrollUpButtonHandler = () => {
      window.pageYOffset > document.documentElement.clientHeight
        ? setScroll(true)
        : setScroll(false);
    };
    window.addEventListener("scroll", scrollUpButtonHandler);
  }, []);

  const showPopupHandler = function (value) {
    setOpenPopup(value);
    if (!openPopup) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  };
  const closePopupOverlay = function (e) {
    if (e.target.id === "overlay") {
      showPopupHandler(false);
    }
  };

  //
  // Cart Manipulation
  //
  const addToCart = function (item) {
    let cartCopy = [...cart];
    if (!cartCopy.some((cartItem) => cartItem.id === item.id)) {
      cartCopy.push(item);
    } else cartCopy = cartCopy.filter((cartItem) => cartItem.id !== item.id);
    setCart(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const deleteFromCart = function (id) {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((item) => item.id !== id);

    setCart(cartCopy);
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const localCart = localStorage.getItem("cart");
  useEffect(() => {
    if (localCart) setCart(JSON.parse(localCart));
  }, [localCart]);

  //
  const categorieLoader = function (choosenCategorie) {
    localStorage.setItem("categorie", JSON.stringify(choosenCategorie));
    setCategorie(JSON.parse(localStorage.getItem("categorie")));
  };

  return (
    <>
      <div className={styles.app}>
        <Header showPopupHandler={showPopupHandler} icon={iconSmall} />
        <NewsBar news={news} />

        <Routes>
          <Route
            path="/"
            element={
              <Home scrollUp={scrollUp} categorieLoader={categorieLoader} />
            }
          />
          <Route
            path="/categories"
            element={
              <Categories
                categorieLoader={categorieLoader}
                scrollUp={scrollUp}
              />
            }
          />
          <Route
            path="/categories/products"
            element={<Products categorie={categorie} scrollUp={scrollUp} />}
          />
          <Route
            path="/categories/products/:id"
            element={<ItemContainer cart={cart} addToCart={addToCart} />}
          />
          <Route path="/results/:params" element={<Results />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart deleteFromCart={deleteFromCart} clearCart={clearCart} />
            }
          />
        </Routes>
        <Footer showPopupHandler={showPopupHandler} scrollUp={scrollUp} />
        {/* <button
          onClick={scrollUp}
          className={
            scroll
              ? `${styles.scrollUpButton} ${styles.scrollUpButtonActive}`
              : styles.scrollUpButton
          }
        >
          <BiUpArrowAlt />
        </button> */}
        <ScrollUpButton scroll={scroll} scrollUp={scrollUp} />
      </div>
      <div
        id="overlay"
        onClick={closePopupOverlay}
        className={
          openPopup
            ? `${styles.overlay} ${styles.overlayActive} `
            : styles.overlay
        }
      >
        <Popup
          openPopup={openPopup}
          showPopupHandler={showPopupHandler}
          popupImages={popupImages}
        />
      </div>
    </>
  );
}

export default App;
