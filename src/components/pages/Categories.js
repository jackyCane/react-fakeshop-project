import { useEffect } from "react";

import Divided from "../divided/Divided";
import Section from "../Section";
import styles from "./style/Categories.module.scss";

import { divided } from "../../data/divided";

const Categories = function ({ scrollUp, categorieLoader }) {
  useEffect(() => scrollUp(), []);
  return (
    <Section>
      <div className={styles.categoriesBlocks}>
        <Divided
          categorieLoader={categorieLoader}
          selectable={true}
          info={divided.dividedClothes}
        />
      </div>
      <div className={styles.categoriesBlocks}>
        <Divided
          categorieLoader={categorieLoader}
          selectable={true}
          info={divided.dividedOthers}
        />
      </div>
    </Section>
  );
};
export default Categories;
