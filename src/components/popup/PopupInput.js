import styles from "./style/PopupInput.module.scss";

const PopupInput = function ({ inputData, handleInputs }) {
  const { name, type, placeholder } = inputData;
  return (
    <input
      onChange={handleInputs}
      className={styles.popupInput}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
export default PopupInput;
