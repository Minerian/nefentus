import styles from "./navigation.module.css";

import Logo from "../../assets/logo/logo.svg";

import DropDown from "../../assets/icon/dropdown.svg";
import Button from "../button/button";
import Languages from "./languages.jsx/languages";
import { useState } from "react";

import QR from "../../assets/icon/qrcode.svg";

import Payment from "../../assets/icon/money.svg";
import Cash from "../../assets/icon/cash.svg";

import PaymentW from "../../assets/icon/moneyW.svg";
import CashW from "../../assets/icon/cashW.svg";
import { Link } from "react-router-dom";

import Arrow from "../../assets/icon/blueArrow.svg";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrop, setOpenDrop] = useState(false);

  return (
    <nav className={`${styles.navigation} load`}>
      <div className={`container ${styles.content}`}>
        <div>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="" />
          </Link>
          <ul>
            <li className="standard">
              <Link to="/">Home</Link>
            </li>
            <li className={`standard ${styles.hover}`}>
              <div className={styles.menu}>
                Solutions <img src={DropDown} alt="" />
              </div>
              <div className={`${styles.dropdownMenu}`}>
                <div className={`${styles.listContent}`}>
                  <Link to="/payment" className={styles.item}>
                    <img src={Payment} alt="" />
                    <div>
                      <p className={styles.headline}>
                        Payment <img src={Arrow} alt="" />
                      </p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </Link>
                  <Link to="/payroll" className={styles.item}>
                    <img src={Cash} alt="" />
                    <div>
                      <p className={styles.headline}>
                        Payroll <img src={Arrow} alt="" />
                      </p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li className="standard">
              <Link to="/support">Resources</Link>
            </li>
            <li className="standard">
              <Link to="/affiliate">Affiliate Program</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <p className="">
            <Link to="/login">Log in</Link>
          </p>
          <div className={styles.button}>
            <Link to="/signup">Get started</Link>
          </div>
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
            <li className="standard">
              <Link to="/" onClick={() => setOpenMenu(false)}>
                Home
              </Link>
            </li>
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
                  <Link
                    to="/payment"
                    className={styles.item}
                    onClick={() => setOpenMenu(false)}
                  >
                    <img src={PaymentW} alt="" />
                    <div>
                      <p className={styles.headline}>Payment</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/payroll"
                    className={styles.item}
                    onClick={() => setOpenMenu(false)}
                  >
                    <img src={CashW} alt="" />
                    <div>
                      <p className={styles.headline}>Payroll</p>
                      <p className={styles.subheadline}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            <li className="standard">
              <Link to="/support" onClick={() => setOpenMenu(false)}>
                Resources
              </Link>
            </li>
            <li className="standard">
              <Link to="/affiliate" onClick={() => setOpenMenu(false)}>
                Affiliate Program
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Button link="/login" onClick={() => setOpenMenu(false)}>
            Log in
          </Button>
          <Button color="white" onClick={() => setOpenMenu(false)}>
            Sign up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
