import DropDown from "../../../assets/icon/dropdown.svg";
import USA from "../../../assets/icon/flags/usa.svg";

import styles from "./languages.module.css";

const list = [
  {
    label: "English",
    flag: USA,
  },
  {
    label: "Italian",
    flag: USA,
  },
  {
    label: "Spain",
    flag: USA,
  },
  {
    label: "French",
    flag: USA,
  },
  {
    label: "German",
    flag: USA,
  },
];

const Languages = () => {
  return (
    <div className={styles.languages}>
      <div className={styles.menu}>
        <img src={USA} alt="" />
        <p className="standard">EN</p>
        <img src={DropDown} alt="" />
      </div>
      <div className={`${styles.dropdown}`}>
        <div className={`${styles.body} card`}>
          {list.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.flag} alt="" />
              <p className="standard">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
