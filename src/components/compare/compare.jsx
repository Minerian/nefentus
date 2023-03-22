import styles from "./compare.module.css";

import Pros from "../../assets/icon/pros.svg";
import Cons from "../../assets/icon/cons.svg";

const content = [
  {
    type: "cons",
    title: "Difficulty in standing out among competitors in a crowded market",
    description:
      "With so many affiliate programs and traditional products available, it can be challenging for affiliates to differentiate themselves and their promotions from the competition. This can lead to lower engagement and sales, making it harder to earn commissions.",
  },
  {
    title: "Difficulty in standing out among competitors in a crowded market",
    description:
      "Nefentus is a revolutionary platfomr and offers its affiliates a range of marketing materials, including banners and landing pages, to help them differentiate themselves and stand out in a crowded market. Additionally, the program offers attractive commissions and a range of products and services to promote, giving affiliates a competitive edge.",
  },
  {
    type: "cons",
    title: "Dependence on the performance of the products or services",
    description:
      "Affiliates are at the mercy of the performance and quality of the products or services they are promoting. If the product or service underperforms, it can negatively impact an affiliate's reputation and earnings potential.",
  },
  {
    title: "Dependence on the performance of the products or services",
    description:
      "Nefentus is committed to providing high-quality, reliable products and services to its customers, which ultimately benefits its affiliates by maintaining a positive reputation and ensuring customer satisfaction. We have been growing  quickly and have high levels of customer satisfaction.",
  },
  {
    type: "cons",
    title: "Limited control over the product or service, including pricing",
    description:
      "Traditionally affiliates  have limited control over the products or services they promote, including pricing, customer support, and other aspects of the customer experience. This can lead to frustration or dissatisfaction among customers, which can ultimately impact an affiliate's earnings potential.",
  },
  {
    title: "Limited control over the product or service, including pricing",
    description:
      "Nefentus' customer support team is available 24/7 to handle any issues or concerns that customers may have, ensuring a positive customer experience. We also offer very competitive pricing, ensuring that our products and services remain attractive to customers and affiliates alike.",
  },
];

const Compare = () => {
  return (
    <div className={`${styles.section} container`}>
      {content.map((item) => (
        <Card
          type={item.type}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Compare;

const Card = ({ type, title, description }) => {
  return (
    <div className={`${styles.card} scroll card`}>
      <div className={styles.top}>
        <img src={type === "cons" ? Cons : Pros} alt="" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
};
