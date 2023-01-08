import { useState } from "react";
import Button from "../../UI/Button";
import ButtonCancel from "../../UI/ButtonCancel";
import styles from "./style/Popup.module.scss";
import PopupInput from "./PopupInput";
import { useRef } from "react";
import { useEffect } from "react";

const Popup = function ({ popupImages, showPopupHandler, openPopup }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useRef();
  useEffect(() => formReset(), [openPopup]);

  const inputsData = {
    email: {
      name: "email",
      type: "text",
      placeholder: "Enter your e-mail",
    },
    login: {
      name: "login",
      type: "text",
      placeholder: "Create a login",
    },
    password: {
      name: "password",
      type: passwordVisible ? "text" : "password",
      placeholder: "Choose a password",
    },
    initialValues: {
      email: "",
      login: "",
      password: "",
    },
  };
  const [values, setValues] = useState(inputsData.initialValues);

  const handleInputs = function (e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const showPassword = function (e) {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  const showPopup = function (e, value) {
    e.preventDefault();
    showPopupHandler(value);
  };
  const formReset = function () {
    if (!openPopup) {
      setValues(inputsData.initialValues);
      form.current.reset();
    }
  };

  return (
    <div
      className={
        openPopup
          ? `${styles.popupWrapper} ${styles.popupWrapper__active}`
          : styles.popupWrapper
      }
    >
      <div className={styles.cancelButton}>
        <ButtonCancel onClick={(e) => showPopup(e, false)} />
      </div>
      <div className={styles.popup}>
        <div className={`${styles.popup__title} ${styles.title}`}>
          <div className={styles.title__text}>Join Us</div>
          <div className={styles.title__image}>
            <img src={popupImages.iconSmallBlack} alt="icon-small-black" />
          </div>
        </div>
        <form ref={form}>
          <div className={styles.popup__inputs}>
            <PopupInput
              handleInputs={handleInputs}
              value={values.email}
              inputData={inputsData.email}
            />
            <PopupInput
              handleInputs={handleInputs}
              value={values.login}
              inputData={inputsData.login}
            />
            <div className={styles.passwordBlock}>
              <PopupInput
                handleInputs={handleInputs}
                value={values.password}
                inputData={inputsData.password}
              />
              <button
                onClick={showPassword}
                className={styles.passwordBlock__btn}
              >
                <div className={styles.passwordBlock__image}>
                  <img
                    src={
                      passwordVisible
                        ? popupImages.passwordHiddenIcon
                        : popupImages.passwordShownIcon
                    }
                    alt="icon-password-hidden"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.popup__btns}>
            <Button extrastyles={true} addClass={styles.popup__btn}>
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Popup;
