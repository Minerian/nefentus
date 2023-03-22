import styles from "./layout.module.css";
import Button from "./../button/button";

import Android from "../../assets/icon/android.svg";
import Apple from "../../assets/icon/apple.svg";

import Dummy from "../../assets/image/dummy.png";

import Checkmark from "../../assets/icon/singleCheckmark.svg";
import { Link } from "react-router-dom";

const Layout = ({
  heading,
  title,
  description,
  button,
  image = Dummy,
  store,
  subtitle,
  reverse,
  list,
}) => {
  return (
    <div
      className={`${styles.layout} ${heading ? styles.hero : ""} ${
        heading ? "load hero" : ""
      } container`}
    >
      <div
        className={heading ? "" : "scroll"}
        style={{ order: reverse ? 2 : 1 }}
      >
        {subtitle && (
          <p className={`${styles.subtitle} subtitle`}>{subtitle}</p>
        )}
        {heading && <h1>{heading}</h1>}
        {title && <h2>{title}</h2>}

        {description && (
          <p className={`standard ${styles.description}`}>{description}</p>
        )}

        {list && (
          <div className={styles.list}>
            <div>
              <img src={Checkmark} alt="" />
              <p>No investment required to join</p>
            </div>
            <div>
              <img src={Checkmark} alt="" />
              <p>Earn from products you believe</p>
            </div>
            <div>
              <img src={Checkmark} alt="" />
              <p>Safe & Secure</p>
            </div>
            <div>
              <img src={Checkmark} alt="" />
              <p>Potential for unlimited earnings</p>
            </div>
          </div>
        )}

        {button && <Button>{button}</Button>}

        {store && (
          <div className={styles.store}>
            <p className="standard">Available on:</p>

            <div>
              <Link to="/">
                <img src={Android} alt="" />
              </Link>
              <Link to="/">
                <img src={Apple} alt="" />
              </Link>
            </div>
          </div>
        )}
      </div>
      <img
        className={heading ? "" : "scroll"}
        src={image}
        alt=""
        style={{ order: reverse ? 1 : 2 }}
      />
    </div>
  );
};

export default Layout;
