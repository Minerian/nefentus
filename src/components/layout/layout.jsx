import styles from "./layout.module.css";
import Button from "./../button/button";

import Android from "../../assets/icon/android.svg";
import Apple from "../../assets/icon/apple.svg";

import Dummy from "../../assets/image/dummy.png";

const Layout = ({
  heading,
  title,
  description,
  button,
  image,
  store,
  subtitle,
  reverse,
}) => {
  return (
    <div className={`${styles.layout} ${heading ? styles.hero : ""} container`}>
      <div style={{ order: reverse ? 2 : 1 }}>
        {subtitle && (
          <p className={`${styles.subtitle} subtitle`}>{subtitle}</p>
        )}
        {heading && <h1>{heading}</h1>}
        {title && <h2>{title}</h2>}

        {description && (
          <p className={`standard ${styles.description}`}>{description}</p>
        )}

        {button && <Button>{button}</Button>}

        {store && (
          <div className={styles.store}>
            <p className="standard">Available on:</p>

            <div>
              <img src={Android} alt="" />
              <img src={Apple} alt="" />
            </div>
          </div>
        )}
      </div>
      <img
        src={image ? image : Dummy}
        alt=""
        style={{ order: reverse ? 1 : 2 }}
      />
    </div>
  );
};

export default Layout;
