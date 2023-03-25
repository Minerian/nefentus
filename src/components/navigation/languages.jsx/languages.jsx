import DropDown from "../../../assets/icon/dropdown.svg";
import USA from "../../../assets/icon/flags/usa.svg";
import DE from "../../../assets/icon/flags/de.svg";
import ES from "../../../assets/icon/flags/es.svg";
import AR from "../../../assets/icon/flags/ar.svg";
import FR from "../../../assets/icon/flags/fr.svg";

import styles from "./languages.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

let list = [
  {
    label: "English",
    flag: USA,
    code: "en",
  },
  {
    label: "German",
    flag: DE,
    code: "de",
  },
  {
    label: "Spanisch",
    flag: ES,
    code: "es",
  },
  {
    label: "France",
    flag: FR,
    code: "fr",
  },
  {
    label: "Arabic",
    flag: AR,
    code: "ar",
  },
];

const Languages = () => {
  const query = useLocation();

  const { t, i18n } = useTranslation();

  const handleTrans = (code) => {
    i18n.changeLanguage(code);
  };

  let listForRender = list;

  if (query.pathname === "/support") {
    listForRender = list.slice(0, 2);
  } else if (query.pathname === "/privacy" || query.pathname === "/imprint") {
    listForRender = list.slice(0, 1);
  } else {
    listForRender = list;
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
          {listForRender.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => handleTrans(item.code)}
            >
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
