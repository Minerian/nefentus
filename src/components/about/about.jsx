import styles from "./about.module.css";

import Graphic1 from "../../assets/image/graphic1.svg";
import Graphic2 from "../../assets/image/graphic2.png";
import Graphic3 from "../../assets/image/graphic3.svg";

const About = () => {
  return (
    <div className="container break">
      <div className={`${styles.card} ${styles.horizontalCard} card scroll`}>
        <div>
          <p className={`subtitle ${styles.subtitle}`}>Rapid Adoption</p>
          <h2>Users trust is reflected in their increased activity</h2>
          <p className={styles.description}>
            The growing user activity on Nefentus showcases our users' trust and
            the outstanding value they derive from our service. We are committed
            to continually delivering excellence and preserving their
            confidence.
          </p>
        </div>
        <img src={Graphic1} alt="" />
      </div>
      <div className={`${styles.cardRow}`}>
        <div className={`${styles.card} ${styles.verticalCard} scroll card`}>
          <img src={Graphic2} alt="" />
          <div className={styles.content}>
            <p className={`subtitle ${styles.subtitle}`}>Manage</p>
            <h3>
              Leverage the power <br /> of our Dashboards
            </h3>
            <p className="standard">
              Our advanced dashboards enable you to gain deeper insights and
              make data-driven decisions with ease, improving your productivity
              and profitability. With powerful data visualization and analysis
              tools at your fingertips, you can uncover hidden trends, identify
              key performance indicators, and optimize your operations for peak
              efficiency.
            </p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.verticalCard} scroll card`}>
          <img src={Graphic3} alt="" />

          <div className={styles.content}>
            <p className={`subtitle ${styles.subtitle}`}>Manage</p>
            <h3>
              Effortlessly connect <br /> with your other tools
            </h3>
            <p className="standard">
              Easily integrating your existing financial stack with our platform
              not only enables you to access over 200 wallets for crypto
              payments but also allows you to leverage your current
              infrastructure, reduce the need for additional resources,
              streamline your financial operations, and gain better control over
              your business's financial data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
