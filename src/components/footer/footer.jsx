import styles from "./footer.module.css";

import Logo from "../../assets/logo/logo.png";

import Instagram from "../../assets/icon/instagram.svg";
import Linkedin from "../../assets/icon/linkedin.svg";
import Telegram from "../../assets/icon/telegram.svg";

const content = [
  {
    label: "Overview",
    links: ["Home", "Payroll", "Payment", "Resources", "Affiliate"],
  },
  {
    label: "Join",
    links: ["Log in", "Sign in", "Play store", "App store"],
  },
  {
    label: "Information",
    links: ["Privacy Policy", "Imprint", "Terms of Service", "Cookies"],
  },
  {
    label: "Company",
    links: ["office@nefentus.com", "Larnaca, Cyprus"],
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.top} container`}>
        <img src={Logo} alt="" />

        <div className={styles.content}>
          {content.map((item, index) => (
            <div className={styles.column} key={index}>
              <p className={styles.label}>{item.label}</p>

              <ul>
                {item.links.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.copyright} container`}>
        <p>© 2023 Nefentus. All rights reserved. | Minerian Agency.</p>

        <div className={styles.icons}>
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
          <img src={Telegram} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
