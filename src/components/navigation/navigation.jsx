import styles from "./navigation.module.css";

import Logo from "../../assets/logo/logo.png";

import DropDown from "../../assets/icon/dropdown.svg";
import Button from "../button/button";
import Languages from "./languages.jsx/languages";
import { useState } from "react";

import QR from "../../assets/icon/qrcode.svg";

import Payment from "../../assets/icon/money.svg";
import Cash from "../../assets/icon/cash.svg";

import PaymentW from "../../assets/icon/moneyW.svg";
import CashW from "../../assets/icon/cashW.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrop, setOpenDrop] = useState(false);

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
                  <div>
                    <img src={Payment} alt="" />
                    <div>
                      <p className={styles.headline}>Payment</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={Cash} alt="" />
                    <div>
                      <p className={styles.headline}>Payroll</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
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
          <img className={styles.qrcode} src={QR} alt="" />

          <Languages />
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
          <div>
            <img src={Logo} alt="" />

            <div className={styles.close}>
              <Languages />

              <p onClick={() => setOpenMenu(false)}>X</p>
            </div>
          </div>

          <ul>
            <li className="standard">Home</li>
            <li
              className={`standard ${styles.hover} ${styles.mobItem}`}
              style={{ height: openDrop ? 180 : 20 }}
            >
              <div
                className={styles.menu}
                onClick={() => setOpenDrop((prev) => !prev)}
              >
                Solutions <img src={DropDown} alt="" />
              </div>
              <div className={`${styles.mobDown}`}>
                <div className={`${styles.mobListContent}`}>
                  <div>
                    <img src={PaymentW} alt="" />
                    <div>
                      <p className={styles.headline}>Payment</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={CashW} alt="" />
                    <div>
                      <p className={styles.headline}>Payroll</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="standard">Resources</li>
            <li className="standard">Affiliate Program</li>
          </ul>
        </div>
        <div>
          <Button>Log in</Button>
          <Button color="white">Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
