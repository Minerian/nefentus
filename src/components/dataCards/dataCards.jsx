import styles from "./dataCards.module.css";

import Image1 from "../../assets/icon/commision.svg";
import Image2 from "../../assets/icon/analytics.svg";
import Image3 from "../../assets/icon/automatons.svg";
import Image4 from "../../assets/icon/products.svg";

import Checkmark from "../../assets/icon/singleCheckmark.svg";

const content = [
  {
    icon: Image1,
    title: "3.5% Commission",
    description:
      "Experience unparalleled payment processing, featuring strong conversion rates, popular and intuitive payment methods, and fast, safe transactions.",
    list: [
      "Strong conversion rates",
      "Popular payment methods",
      "Fast & Safe",
      "Intuitive payment process",
    ],
  },
  {
    icon: Image2,
    title: "Smart Analytics",
    description:
      "We calculate key metrics for your business and keep track of your growth effortlessly.",
    list: [
      "See Measurable growth",
      "Optimize processes",
      "Access analytics",
      "Gain Insights",
    ],
  },
  {
    icon: Image3,
    title: "Automatons",
    description:
      "Nefentus saves you from manual invoicing and simplifies your accounting.",
    list: [
      "Automated invoicing",
      "Insightful dashboards",
      "Financial overview",
      "Completely complient ",
    ],
  },
  {
    icon: Image4,
    title: "Digital Products",
    description:
      "Securely upload digital products once to Nefentus and make them available for download after purchase, without any third-party providers.",
    list: [
      "Secure your Content",
      "Access to digital products ",
      "Have Your Own cloud",
    ],
  },
];

const DataCards = () => {
  return (
    <div className={`container break ${styles.section}`}>
      {content.map((item) => (
        <Card
          image={item.icon}
          title={item.title}
          list={item.list}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default DataCards;

const Card = ({ image, title, description, list }) => {
  return (
    <div className={`${styles.card} scroll card`}>
      <div className={styles.top}>
        <img src={image} alt="" />
        <h4>{title}</h4>
      </div>
      <p className={styles.description}>{description}</p>

      <div className={styles.list}>
        {list.map((item) => (
          <div>
            <img src={Checkmark} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
