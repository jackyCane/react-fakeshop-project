import DividedPart from "./DividedPart";
import styles from "./style/Divided.module.scss";

const Divided = function ({ info, selectable = false, categorieLoader }) {
  return (
    <div className={styles.divided}>
      {info.map((item) => (
        <DividedPart
          categorieLoader={categorieLoader}
          categorie={item.categorie}
          key={item.id}
          img={item.img}
          description={item.desc}
          link={item.link}
          selectable={selectable}
        />
      ))}
    </div>
  );
};
export default Divided;
