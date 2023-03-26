import styles from "./input.module.css";

import dropDown from "../../assets/icon/dropdown.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Input = ({ label, placeholder, value, setState, secure }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <p className={styles.label}>{label}</p>

      <input
        className={styles.input}
        type={secure ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;

export const Options = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <div className={`${styles.inputWrapper} ${styles.option}`}>
      <p className={styles.label}>{t("signUp.optionLabel")}</p>

      <div className={styles.input} onClick={() => setOpen((prev) => !prev)}>
        {value} <img src={dropDown} alt="" />
        {open && (
          <div className={`card ${styles.body}`}>
            <p onClick={() => setValue("Vendor")}>{t("signUp.option1")}</p>
            <p onClick={() => setValue("Affiliate")}>{t("signUp.option2")}</p>
            <p onClick={() => setValue("Vendor / Affiliate")}>
              {t("signUp.option1")} / {t("signUp.option2")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
