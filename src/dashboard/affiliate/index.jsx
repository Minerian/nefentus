import Button from "./../../components/button/button";
import { Link } from "react-router-dom";

import Negative from "../../assets/icon/negative.svg";
import Positive from "../../assets/icon/positive.svg";

import Logo from "../../assets/logo/logo.svg";

import styles from "./affiliate.module.css";

import Logout from "../../assets/icon/logout.svg";

import UrlLink from "../../assets/icon/link.svg";

const cardsContent = [
  {
    title: "Incomes",
    amount: 467867,
    percentage: 2.11,
  },
  {
    title: "Total Clicks",
    amount: -325800,
    percentage: 11.52,
  },
  {
    title: "Total Sign ups",
    amount: 1185600,
    percentage: 105.55,
  },
];

const AffiliateBody = () => {
  return (
    <div className="container">
      <AffiliateNavigation />
      <AffiliateHeader />

      <div className={styles.row}>
        {cardsContent.map((item) => (
          <Card
            title={item.title}
            amount={item.amount}
            percentage={item.percentage}
          />
        ))}
      </div>

      <Graph />
    </div>
  );
};

export default AffiliateBody;

const AffiliateNavigation = () => {
  return (
    <div className={styles.navigation}>
      <img src={Logo} alt="" />

      <div className={styles.logout}>
        <p>Log out</p>
        <img src={Logout} alt="" />
      </div>
    </div>
  );
};

const AffiliateHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h3>Overview</h3>
          <p>
            You’ve earned <span>+5,878</span> this month
          </p>
        </div>

        <Button color="white">Vendor Dashboard</Button>
      </div>

      <div className={styles.link}>
        <p className={styles.label}>Affiliate link: </p>

        <p className={styles.url}>
          https://www.loremipsumdolor.com/7929b2da3e6b0867c8183d1fa1c03555
        </p>

        <img src={UrlLink} alt="" />
      </div>
    </div>
  );
};

const Card = ({ title, amount, percentage }) => {
  const positive = amount > 0 ? true : false;

  function transformNumber(num) {
    let str = num.toString();
    let result = "";

    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
      if (j === 2) {
        result = "." + result;
        j = -1;
      }
      result = str[i] + result;
    }

    return result.replace(/^(\d)(\d{3}\.)/, "$1,$2");
  }

  return (
    <div className={`card ${styles.card}`}>
      <h4>{title}</h4>
      <p className={styles.amount}>
        {positive ? `+` : ``}
        {title === "Incomes" ? `$` : ``}
        {transformNumber(amount)}
      </p>

      <div className={styles.info}>
        <img src={positive ? Positive : Negative} alt="" />
        <p className={styles.percentage}>
          <span style={{ color: positive ? "#23C215" : "#C21515" }}>
            {positive ? `+` : `-`}
            {percentage}%
          </span>{" "}
          vs last 30 days
        </p>
      </div>
    </div>
  );
};

const verticalList = [
  "160,00K €",
  "140,00K €",
  "120,00K €",
  "100,00K €",
  "80,00K €",
  "60,00K €",
  "40,00K €",
  "20,00K €",
  "0K €",
];

const horizontalList = [
  "Jan, 2022",
  "Mar, 2022",
  "May, 2022",
  "July, 2022",
  "Sept, 2022",
  "Nov, 2022",
  "Jan, 2023",
  "Mar, 2023",
];

const Graph = () => {
  return (
    <div className={`card ${styles.graphCard}`}>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.label}>Incomes</div>
          <div className={styles.graphAmount}>$58,345,190</div>
        </div>

        <div className={styles.datePicker}>
          <p>Jan 01 2022</p>
          <p> - </p>
          <p>Mar 01 2023</p>
        </div>
      </div>

      <div className={styles.graph}>
        <div className={styles.vertical}>
          {verticalList.map((item, index) => (
            <div key={index} className={styles.verticalItem}>
              <p className={styles.verticalLabel}>{item}</p>
              <div className={styles.verticalLine}></div>
            </div>
          ))}
        </div>
        <div className={styles.horizontal}>
          {horizontalList.map((item, index) => (
            <div key={index} className={styles.horizontalItem}>
              <div className={styles.horizontalDot}></div>
              <p className={styles.horizontalLabel}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const list = [
  {
    text: "Imprint",
    link: "/imprint",
  },
  {
    text: "Privacy Policy",
    link: "/privacy",
  },
  {
    text: "Terms and Condition",
    link: "/terms",
  },
  {
    text: "Contact us",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>
            <Link to={item.link}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
