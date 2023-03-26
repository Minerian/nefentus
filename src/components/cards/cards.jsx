import HeadingCenter from "../headingCenter/headingCenter";
import styles from "./cards.module.css";

import Wallet from "../../assets/image/wallet.png";
import Case from "../../assets/image/case.png";
import Bag from "../../assets/image/bag.png";

import Video1 from "../../assets/video/phone.mp4";
import Video2 from "../../assets/video/chart.mp4";
import Video3 from "../../assets/video/target.mp4";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const list = [
  {
    video: Video1,
  },
  {
    video: Video2,
  },
  {
    video: Video3,
  },
];

const Cards = () => {
  const { t } = useTranslation();

  const list2 = t("home.cardList", { returnObjects: true });

  useEffect(() => {
    const videos = document.querySelectorAll(".cardVideo");

    const onLoad = () => {
      videos.forEach((video) => video.play());
    };

    if (videos.length > 0) {
      onLoad();
    }

    window.addEventListener("load", onLoad);
  }, []);

  return (
    <div className="container break ">
      <HeadingCenter
        subtitle={t("home.cardSubtitle")}
        title={t("home.cardTitle")}
      />

      <div className={styles.cards}>
        {list.map((item, index) => (
          <div className={`${styles.card} scroll card`}>
            <video className="cardVideo" muted loop playsInline>
              <source src={item.video} type="video/mp4" />
            </video>
            <p>{list2[index].title}</p>
            <p className="standard">{list2[index].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
