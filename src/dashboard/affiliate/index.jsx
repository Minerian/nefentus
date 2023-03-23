import Button from "./../../components/button/button";
import { Link } from "react-router-dom";

import Negative from "../../assets/icon/negative.svg";
import Positive from "../../assets/icon/positive.svg";

import Logo from "../../assets/logo/logo.svg";

import styles from "./affiliate.module.css";

import Logout from "../../assets/icon/logout.svg";

import UrlLink from "../../assets/icon/link.svg";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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

      <Footer />
    </div>
  );
};

export default AffiliateBody;

const AffiliateNavigation = () => {
  return (
    <div className={styles.navigation}>
      <img src={Logo} alt="" />

      <Link to="/" className={styles.logout}>
        <p>Log out</p>
        <img src={Logout} alt="" />
      </Link>
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

        <div className={styles.linkBox}>
          <p className={styles.url}>
            https://www.loremipsumdolor.com/7929b2da3e6b0867c8183d1fa1c03555
          </p>
          <img src={UrlLink} alt="" />
        </div>
      </div>
    </div>
  );
};

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

const Card = ({ title, amount, percentage }) => {
  const positive = amount > 0 ? true : false;

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

const labels = [
  "Jan, 2022",
  "May, 2022",
  "July, 2022",
  "Nov, 2022",
  "Jan, 2023",
  "Mar, 2023",
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  tension: 0.4,

  scales: {
    y: {
      grid: {
        color: "rgba(255,255,255,8%)",
      },
      ticks: {
        // Include a eur sign in the ticks
        callback: function (value, index, ticks) {
          return value + ".00K €";
        },
        padding: 10,
        color: "#c4c4c4",
        font: {
          size: window.innerWidth < 550 ? 8 : 14,
          family: "Euclid",
          weight: 400,
        },
      },
    },
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#c4c4c4",

        font: {
          family: "Euclid",
          weight: 400,
          size: window.innerWidth < 550 ? 8 : 14,
        },
      },
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.floor(Math.random() * 160) + 20),
      borderColor: "#1595C2",
      backgroundColor: "#1595C2",
    },
  ],
};

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

      <Line options={options} data={data} />
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
    <div className={styles.footer}>
      <ul>
        {list.map((item) => (
          <li>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <p>© 2023 Nefentus. All rights reserved. | Minerian Agency.</p>
    </div>
  );
};
