import DropDown from "../../../assets/icon/dropdown.svg";
import USA from "../../../assets/icon/flags/usa.svg";
import DE from "../../../assets/icon/flags/de.svg";
import ES from "../../../assets/icon/flags/es.svg";
import AR from "../../../assets/icon/flags/ar.svg";
import FR from "../../../assets/icon/flags/fr.svg";

import styles from "./languages.module.css";
import { useLocation } from "react-router-dom";

let list = [
  {
    label: "English",
    flag: USA,
  },
  {
    label: "German",
    flag: DE,
  },
  {
    label: "Spanisch",
    flag: ES,
  },
  {
    label: "France",
    flag: FR,
  },
  {
    label: "Arabic",
    flag: AR,
  },
];

const Languages = () => {
  const query = useLocation();

  console.log(query);

  if (query.pathname === "/support") {
    list = list.slice(0, 2);
  } else if (query.pathname === "/privacy" || query.pathname === "/imprint") {
    list = list.slice(0, 1);
  }

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
