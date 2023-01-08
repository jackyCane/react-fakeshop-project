import Button from "../../UI/Button";
import styles from "./style/JoinUs.module.scss";
const JoinUs = function ({ icon, showPopupHandler }) {
  return (
    <div className={styles.joinUs}>
      <div className={styles.joinUs__text}>
        <div className={styles.joinUs__title}>
          <p>become a member</p>
        </div>
        <div className={styles.joinUs__dscr}>
          <p>Sign up for free. Join the community.</p>
        </div>
        <Button
          onClick={showPopupHandler}
          addClass={styles.joinUs__btn}
          extrastyles={true}
        >
          Join
        </Button>
      </div>
      <div className={styles.joinUs__logo}>
        <img src={icon} />
      </div>
    </div>
  );
};
export default JoinUs;
