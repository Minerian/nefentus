import HeadingCenter from "../headingCenter/headingCenter";
import styles from "./cards.module.css";

import Wallet from "../../assets/image/wallet.png";
import Case from "../../assets/image/case.png";
import Bag from "../../assets/image/bag.png";

const list = [
  {
    image: Wallet,
    title: "Free onboarding support",
    description:
      "Take advantage of our free onboarding support to help you get started.",
  },
  {
    image: Case,
    title: "Bespoke Solutions",
    description:
      "We offer customized solutions that can be tailored to your unique needs.",
  },
  {
    image: Bag,
    title: "Benefit from our expertise",
    description:
      "Leverage our deep industry knowledge to drive success within your business.",
  },
];

const Cards = () => {
  return (
    <div className="container break">
      <HeadingCenter
        subtitle="Your partner for scaling"
        title="Companies around the world use Nefentus to manage and scale their payment processing."
      />

      <div className={styles.cards}>
        {list.map((item) => (
          <div className={`${styles.card} card`}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p className="standard">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
