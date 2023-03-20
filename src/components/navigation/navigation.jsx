import styles from "./navigation.module.css";

import Logo from "../../assets/logo/logo.png";

import DropDown from "../../assets/icon/dropdown.svg";
import Button from "../button/button";
import Languages from "./languages.jsx/languages";
import { useState } from "react";

import QR from "../../assets/icon/qrcode.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={`${styles.navigation}`}>
      <div className={`container ${styles.content}`}>
        <div>
          <img className={styles.logo} src={Logo} alt="" />
          <ul>
            <li className="standard">Home</li>
            <li className={`standard ${styles.hover}`}>
              <div className={styles.menu}>
                Solutions <img src={DropDown} alt="" />
              </div>
              <div className={`${styles.dropdownMenu}`}>
                <div className={`${styles.listContent}`}>
                  <p>Payment</p>
                  <p>Payroll</p>
                </div>
              </div>
            </li>
            <li className="standard">Resources</li>
            <li className="standard">Affiliate Program</li>
          </ul>
        </div>
        <div className={styles.right}>
          <p className="">Log in</p>
          <div className={styles.button}>Get started</div>
          <Languages />

          <img className={styles.qrcode} src={QR} alt="" />
        </div>

        <div className={styles.mobMenu}>
          <p className="standard" onClick={() => setOpenMenu(true)}>
            Menu
          </p>
        </div>
      </div>

      <div
        className={styles.mobileMenu}
        style={{ transform: openMenu ? "translateX(0%)" : "translateX(100%)" }}
      >
        <div>
          <img src={Logo} alt="" />

          <div className={styles.close}>
            <Languages />

            <p onClick={() => setOpenMenu(false)}>X</p>
          </div>
        </div>

        <ul>
          <li className="standard">Home</li>
          <li className={`standard ${styles.hover}`}>
            <div className={styles.menu}>
              Solutions <img src={DropDown} alt="" />
            </div>
            <div className={`${styles.dropdownMenu}`}>
              <p>Payment</p>
              <p>Payroll</p>
            </div>
          </li>
          <li className="standard">Resources</li>
          <li className="standard">Affiliate Program</li>
        </ul>

        <Button>Log in</Button>
        <Button color="white">Sign up</Button>
      </div>
    </nav>
  );
};

export default Navigation;
