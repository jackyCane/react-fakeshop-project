import styles from "./Section.module.scss";

const Section = function ({ title = "", children }) {
  return (
    <div className={styles.section}>
      <div className={styles.section__title}>
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
};
export default Section;
