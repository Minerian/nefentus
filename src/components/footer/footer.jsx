import styles from "./footer.module.css";

import Logo from "../../assets/logo/logo.svg";

import Instagram from "../../assets/icon/instagram.svg";
import Linkedin from "../../assets/icon/linkedin.svg";
import Youtube from "../../assets/icon/youtube.svg";
import { Link } from "react-router-dom";

const content = [
  {
    label: "Overview",
    links: [
      { text: "Home", link: "/" },
      { text: "Payroll", link: "/payroll" },
      { text: "Payment", link: "/payment" },
      { text: "Resources", link: "/support" },
      { text: "Affiliate", link: "/affiliate" },
    ],
  },
  {
    label: "Join",
    links: [
      { text: "Log in", link: "/login" },
      { text: "Sign up", link: "/signup" },
      { text: "Play store", link: "/" },
      { text: "App store", link: "/" },
    ],
  },
  {
    label: "Information",
    links: [
      { text: "Privacy Policy", link: "/privacy" },
      { text: "Imprint", link: "/imprint" },
    ],
  },
  {
    label: "Company",
    links: [
      { text: "office@nefentus.com", link: "/imprint" },
      { text: "Larnaca, Cyprus", link: false },
    ],
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
                  <li key={index}>
                    <Link to={item.link}>{item.text}</Link>
                  </li>
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
          <img src={Youtube} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
