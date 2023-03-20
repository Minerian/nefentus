import styles from "./input.module.css";

import dropDown from "../../assets/icon/dropdown.svg";
import { useState } from "react";

const Input = ({ label, placeholder, secure }) => {
  return (
    <div className={styles.inputWrapper}>
      <p className={styles.label}>{label}</p>

      <input
        className={styles.input}
        type={secure ? "password" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

export const Options = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState("Choose options");

  return (
    <div className={`${styles.inputWrapper} ${styles.option}`}>
      <p className={styles.label}>What do you want to register for?</p>

      <div className={styles.input} onClick={() => setOpen((prev) => !prev)}>
        {value} <img src={dropDown} alt="" />
        {open && (
          <div className={`card ${styles.body}`}>
            <p onClick={() => setValue("Vendor")}>Vendor</p>
            <p onClick={() => setValue("Affiliate")}>Affiliate</p>
            <p onClick={() => setValue("Vendor / Affiliate")}>
              Vendor / Affiliate
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
