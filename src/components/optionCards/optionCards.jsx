import styles from "./optionCards.module.css";

import Image1 from "../../assets/image/invoicing.svg";
import Image2 from "../../assets/image/payroll.svg";
import Image3 from "../../assets/image/expenses.svg";

const content = [
  {
    image: Image1,
    title: "Invoicing",
    description:
      "Your all-in-one platform to manage your invoices. Designed for Finance & Operations teams in companies.",
  },
  {
    image: Image2,
    title: "Payroll",
    description:
      "Processing salaries and bonuses in cryptocurrency has become increasingly popular due to its simplicity and efficiency.",
  },
  {
    image: Image3,
    title: "Expenses",
    description:
      "Simplify expense claims submissions for your team. Approve and reimburse expenses in crypto quickly and easily.",
  },
];

const OptionCards = () => {
  return (
    <div className={`container ${styles.section}`}>
      {content.map((item) => (
        <div className="card">
          <div className={styles.image}>
            <img src={item.image} alt="" />
          </div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OptionCards;
