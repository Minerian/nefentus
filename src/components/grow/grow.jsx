import React from "react";
import HeadingCenter from "../headingCenter/headingCenter";

import Image1 from "../../assets/image/grow1.svg";
import Image2 from "../../assets/image/grow2.svg";
import Image3 from "../../assets/image/grow3.svg";
import Card from "./card/card";

import styles from "./grow.module.css";

const content = [
  {
    title: "Turn Intelligence Into Growth",
    description:
      "Gain instant insight into your business by leveraging our automated calculations of key metrics, enabling you to easily monitor your growth and stay on top of your business.",
    image: Image1,
  },
  {
    title: "Optimized checkouts",
    description:
      "Maximize your sales potential with our sales-optimized checkouts, featuring lightning-fast load times, exceptional conversion rates, and an unparalleled user experience, guaranteed to delight your customers and boost your revenue.",
    image: Image2,
  },
  {
    title: "Automate Your Financial Stack ",
    description:
      "From accounting and tax payments to product provisioning, returns and cancellations, commission and affiliate management, e-ticketing, and beyond, Nefentus offers a comprehensive suite of tools to help streamline and optimize your business operations.",
    image: Image3,
  },
];

const Grow = () => {
  return (
    <div className="container scroll break">
      <HeadingCenter
        noScroll
        subtitle={"Grow"}
        title="Supercharge Your Sales"
      />

      <div className={styles.body}>
        <div className={styles.left}>
          <Card
            title={content[0].title}
            description={content[0].description}
            image={content[0].image}
          />
          <Card
            title={content[2].title}
            description={content[2].description}
            image={content[2].image}
          />
        </div>
        <div className={styles.right}>
          <Card
            title={content[1].title}
            description={content[1].description}
            image={content[1].image}
          />
        </div>
      </div>
    </div>
  );
};

export default Grow;
