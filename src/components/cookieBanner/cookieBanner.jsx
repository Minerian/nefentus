import { Link } from "react-router-dom";

import Cookie from "../../assets/icon/cookie.svg";

import styles from "./cookie.module.css";

const CookieBanner = ({ close }) => {
  return (
    <div className={`${styles.banner} card`}>
      <div className={styles.left}>
        <img src={Cookie} alt="" />

        <p className={styles.text}>
          We use third-party <Link to="/privacy">cookies</Link> in order to{" "}
          <br />
          personalize your site experience.
        </p>
      </div>

      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.button1}`} onClick={close}>
          Decline
        </div>
        <div className={`${styles.button} ${styles.button2}`} onClick={close}>
          Accept
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
