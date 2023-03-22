import HeadingCenter from "../headingCenter/headingCenter";

import styles from "./paymentCards.module.css";
import Button from "./../button/button";

import Checkmark from "../../assets/icon/whiteCheckmark.svg";

const card1List = [
  "Automated invoicing",
  "Accept 7 different payment methods",
  "24/7 uptime",
  "Automated receivables",
  "Premium and fast support",
  "Instant access",
];

const card2List = [
  "All benefits of the Basic-Vendor package",
  "Support via phone and video by a dedicated  account manager",
  "Free access to our private support group for questions, answers and discussion ",
  "Early access to beta versions",
  "Special discounts for transaction fees",
];

const PaymentCards = () => {
  return (
    <div className="container scroll">
      <HeadingCenter
        noScroll
        title={
          <>
            0€ Upfront Fee, 0€ Monthly Fee <br /> Pay Only for Results
          </>
        }
        subtitle="Cost"
      />

      <div className={styles.body}>
        <div className={`${styles.lightCard} ${styles.card}`}>
          <div>
            <div className={styles.top}>
              <h5>Basic - Vendor</h5>
              <p>3.5 % Comission</p>
            </div>
            <div className={styles.list}>
              {card1List.map((item) => (
                <div>
                  <img src={Checkmark} alt="" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Button color="white">Sign Up For Free</Button>
        </div>
        <div className={`${styles.boldCard} ${styles.card}`}>
          <div>
            <div className={styles.top}>
              <h5>Basic - Vendor</h5>
              <p>3.5 % Comission</p>
            </div>
            <div className={styles.list}>
              {card2List.map((item) => (
                <div>
                  <img src={Checkmark} alt="" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Button color="white">Sign Up For Free</Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;
