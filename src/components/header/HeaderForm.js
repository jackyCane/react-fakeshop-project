import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./style/HeaderForm.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";
import ButtonCancel from "../../UI/ButtonCancel";

const HeaderForm = function ({ inputActive, setInputActive }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const input = useRef();

  const handleInput = function (e) {
    e.preventDefault();
    setInputActive(!inputActive);
  };

  const search = function (e) {
    e.preventDefault();
    if (value) {
      navigate(`/results/${value}`);
      handleInput(e);
      setValue("");
      input.current.blur();
    }
  };

  return (
    <form
      onSubmit={(e) => search(e)}
      onFocus={(e) => handleInput(e)}
      className={styles.searchForm}
    >
      <div className={styles.search}>
        <Button addClass={styles.search__btn}>
          <AiOutlineSearch />
        </Button>
        <input
          ref={input}
          className={styles.search__input}
          type="text"
          value={value}
          placeholder="Search"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {inputActive && <ButtonCancel onClick={handleInput} />}
    </form>
  );
};
export default HeaderForm;
