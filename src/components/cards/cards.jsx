import HeadingCenter from "../headingCenter/headingCenter";
import styles from "./cards.module.css";

import Wallet from "../../assets/image/wallet.png";
import Case from "../../assets/image/case.png";
import Bag from "../../assets/image/bag.png";

import Video1 from "../../assets/video/phone.mp4";
import Video2 from "../../assets/video/chart.mp4";
import Video3 from "../../assets/video/target.mp4";

const list = [
  {
    video: Video1,
    title: "Free onboarding support",
    description:
      "Take advantage of our onboarding support to help you get started.",
  },
  {
    video: Video2,
    title: "Bespoke Solutions",
    description:
      "We offer customized solutions that can be tailored to your unique needs.",
  },
  {
    video: Video3,
    title: "Benefit from our expertise",
    description:
      "Leverage our deep industry knowledge to drive success within your business.",
  },
];

const Cards = () => {
  return (
    <div className="container break ">
      <HeadingCenter
        subtitle="Your partner for scaling"
        title="Companies around the world use Nefentus to manage and scale their payment processing."
      />

      <div className={styles.cards}>
        {list.map((item) => (
          <div className={`${styles.card} scroll card`}>
            <video muted loop autoPlay playsInline>
              <source src={item.video} type="video/mp4" />
            </video>
            <p>{item.title}</p>
            <p className="standard">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
