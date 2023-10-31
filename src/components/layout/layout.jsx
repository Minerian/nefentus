import styles from "./layout.module.css";
import Button from "./../button/button";

import Android from "../../assets/icon/android2.svg";
import Apple from "../../assets/icon/apple2.svg";
import Chevron from "../../assets/icon/chevron.svg";

import Google from "../../assets/icon/google.svg";
import Mega from "../../assets/icon/mega.svg";

import QR from "../../assets/icon/qrcode.svg";

import Dummy from "../../assets/image/dummy.webp";

import Checkmark from "../../assets/icon/singleCheckmark.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const Layout = ({
  heading,
  home,
  title,
  load = false,
  description,
  button,
  button2,
  image = Dummy,
  store,
  subtitle,
  reverse,
  video,
  list,
  full,
  children,
}) => {
  const { t } = useTranslation();

  const content = t("affiliate.affiliateList", { returnObjects: true });

  const videoRef = useRef(null);

  const handleLoad = (event) => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reprodukcija počinje
          })
          .catch((error) => {
            console.log("Playback prevented by browser");
          });
      }
    }
  };

  return (
    <div className="container">
      <div
        className={`${styles.layout} ${heading ? styles.hero : ""} ${
          heading || load ? "load hero" : ""
        }`}
      >
        <div
          className={heading || load ? "" : "scroll"}
          style={{ order: reverse ? 2 : 1 }}
        >
          {subtitle && (
            <p className={`${styles.subtitle} subtitle`}>{subtitle}</p>
          )}
          {heading && <h1>{heading}</h1>}
          {title && <h3>{title}</h3>}

          {description && (
            <p
              style={{ fontSize: home ? "2rem" : "" }}
              className={`standard ${styles.description}`}
            >
              {description}
            </p>
          )}

          {list && (
            <div className={styles.list}>
              <div>
                <img src={Checkmark} alt="Checkmark" />
                <p>{content[0]}</p>
              </div>
              <div>
                <img src={Checkmark} alt="Checkmark" />
                <p>{content[1]}</p>
              </div>
              <div>
                <img src={Checkmark} alt="Checkmark" />
                <p>{content[2]}</p>
              </div>
              <div>
                <img src={Checkmark} alt="Checkmark" />
                <p>{content[3]}</p>
              </div>
            </div>
          )}

          <div className={styles.buttonWrapper}>
            {/* {button && <Button link="/signup">{button}</Button>}
          {button2 && (
            <div className={styles.button}>
              <p>{button2}</p>
              <div className={styles.imgWrapper}>
                <img src={Chevron} alt="chevron arrow" />

                <div className={styles.buttonLine}></div>
              </div>
            </div>
          )} */}

            {store && (
              <div className={styles.store}>
                <p className="standard">{t("home.heroAvailable")}</p>

                <div className={styles.buttonWrapperMob}>
                  <Button link="/" color="white">
                    <img src={Android} alt="android logo" />
                    <span>Play Store</span>
                  </Button>
                  <Button link="/" color="white">
                    <img src={Apple} alt="apple logo" />
                    <span>App Store</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        {!video && !children && (
          <img
            className={`${
              heading || load ? "" : reverse ? "slide-right" : "slide-left"
            } ${full ? styles.full : ""}`}
            src={image}
            alt="nefentus graphics"
            style={{ order: reverse ? 1 : 2 }}
          />
        )}

        {video && !children && (
          <video
            onLoadedData={handleLoad}
            ref={videoRef}
            style={{ order: reverse ? 1 : 2 }}
            className={heading ? "" : ""}
            controls={false}
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {children && (
          <div
            className={`${
              heading || load
                ? "load hero"
                : reverse
                ? "slide-right"
                : "slide-left"
            } ${full ? styles.full : ""}`}
            style={{ order: reverse ? 1 : 2 }}
          >
            {children}
          </div>
        )}
      </div>

      {home && (
        <div className={`${styles.layout}`}>
          <div className={styles.inputHero}>
            <div className={styles.inputWrapper}>
              <input type="text" placeholder="Email" />
            </div>
            {button && <Button link="/signup">{button}</Button>}
          </div>
          <div className={styles.connectWrapper}>
            <div className={styles.connect}>
              <p>Or Connect With</p>

              <div className={styles.iconWrapper}>
                <div className={styles.iconBox}>
                  <img src={Google} alt="" />
                </div>
                <div className={styles.iconBox}>
                  <img src={Apple} alt="" />
                </div>
              </div>
            </div>

            <div className={`${styles.connect} ${styles.connect2}`}>
              <p>App Download</p>

              <div className={styles.iconWrapper}>
                <div className={styles.iconBox}>
                  <img src={QR} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
