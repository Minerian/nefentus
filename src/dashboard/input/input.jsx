import styles from "./input.module.css";

import Image from "../../assets/icon/attachment.svg";
import { useRef, useState } from "react";

const Input = ({ label, placeholder, type = "text" }) => {
  return (
    <div className={styles.input}>
      <p>{label}</p>

      <input type={type} name="" id="" placeholder={placeholder} />
    </div>
  );
};

export default Input;

export const Attachment = ({ label }) => {
  const inputRef = useRef(null);

  const [text, setText] = useState(false);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = () => {
    const fileName = inputRef.current.value.split("\\").pop();

    setText(fileName);
  };

  return (
    <>
      <div className={styles.input}>
        <p>{label}</p>

        <div className={styles.attachment} onClick={handleClick}>
          <img src={Image} alt="" />
          <p style={{ color: text ? "#fff" : "#c4c4c4" }}>
            {text ? text : "Add attachment"}
          </p>
        </div>
      </div>
      <input
        ref={inputRef}
        className={styles.hideInput}
        type="file"
        onChange={handleChange}
      />
    </>
  );
};

export const Authentificator = ({ handleClick, placeholder, connected }) => {
  return (
    <div className={styles.input}>
      <p>Authentificator</p>

      <div
        className={styles.attachment}
        style={{ color: connected ? "#fff" : "#c4c4c4" }}
        onClick={handleClick}
      >
        {placeholder}

        <div className={styles.status}>
          {connected ? "Connected" : "Not connected"}
        </div>
      </div>
    </div>
  );
};
