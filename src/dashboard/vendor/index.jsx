import Button from "./../../components/button/button";
import { Link, useNavigate } from "react-router-dom";

import Negative from "../../assets/icon/negative.svg";
import Positive from "../../assets/icon/positive.svg";

import Logo from "../../assets/logo/logo.svg";

import styles from "./vendor.module.css";

import Logout from "../../assets/icon/logout.svg";
import Settings from "../../assets/icon/settings.svg";

import UrlLink from "../../assets/icon/link.svg";

import { Line } from "react-chartjs-2";

import backend_API from "../../api/backendAPI";

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
import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import ProfileBox from "../profileBox/profileBox";

const VendorBody = () => {
  const backendAPI = new backend_API();

  const navigate = useNavigate();

  const checkPermissions = async () => {
    try {
      const response = await backendAPI.checkPermissionAff();
      if (!response) {
        const responseNew = await backendAPI.checkPermissionAdmin();
        if (!responseNew) {
          // navigate("/");
        } else {
          setDashboardAdmin();
        }
      } else {
        setDashboard();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setDashboardAdmin = async () => {
    try {
      const data = await backendAPI.getAdminDashboardTotalStats();
      fillCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  const setDashboard = async () => {
    try {
      const data = await backendAPI.getVendorDashboardTotalStats();
      fillCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  const [signUps, setSignUps] = useState(0);
  const [signUpsPercentage, setSignUpsPercentage] = useState(0.0);
  const [allClicks, setAllClicks] = useState(0);
  const [allClicksPercentage, setAllClicksPercentage] = useState(0);
  const [income, setIncome] = useState(0);
  const [incomePercentage, setIncomePercentage] = useState(0);

  const cardsContent = [
    {
      title: "Income Today",
      amount: income,
      percentage: incomePercentage,
    },
    {
      title: "Income this month",
      amount: allClicks,
      percentage: allClicksPercentage,
    },
    {
      title: "Total income",
      amount: signUps,
      percentage: signUpsPercentage,
    },
    {
      title: "Employees on Payroll",
      amount: income,
      percentage: incomePercentage,
    },
    {
      title: "Expenses this month",
      amount: allClicks,
      percentage: allClicksPercentage,
    },
    {
      title: "Payments",
      amount: signUps,
      percentage: signUpsPercentage,
    },
  ];

  const fillCards = (data) => {
    setAllClicks(data.allClicks);
    setAllClicksPercentage(data.allClicksPercentage);
    setIncome(data.income);
    setIncomePercentage(data.incomePercentage);
    setSignUps(data.signUps);
    setSignUpsPercentage(data.signUpsPercentage);
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <div className={`${styles.body}`}>
      <VendorNavigation />
      <VendorHeader />

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

export default VendorBody;

const VendorNavigation = () => {
  const backendAPI = new backend_API();

  const logOut = async () => {
    try {
      const data = await backendAPI.signout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.navigation}>
      <img src={Logo} alt="" />

      <div className={styles.right}>
        <div className={`${styles.settingsBody} card`}>
          <Link to="/dashboard/settings" className={styles.logout}>
            <img src={Settings} alt="" />
            <p>Settings</p>
          </Link>
          <Link onClick={logOut} to="/" className={styles.logout}>
            <img src={Logout} alt="" />
            <p>Log out</p>
          </Link>
        </div>

        <ProfileBox />
      </div>
    </div>
  );
};

const VendorHeader = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h3>Overview</h3>
          <p>
            You’ve earned <span>0$</span> this month
          </p>
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

const today = new Date();
const oneDay = 24 * 60 * 60 * 1000; // Millisekunden in einem Tag
const days = Math.round((new Date("Mar 01 2023") - today) / oneDay); // Berechne die Anzahl der Tage zwischen heute und dem 1. März 2023
const labels = Array.from({ length: days }, (_, i) => {
  const date = new Date(today.getTime() + i * oneDay);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  return `${month}, ${day}`;
});

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => 0),

      borderColor: "#1595C2",
      backgroundColor: "#1595C2",
      tension: 0.1,
    },
  ],
};

// Rest des Codes bleibt gleich
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
  maintainAspectRatio: false,

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
          return value + "K €";
        },
        // beginAtZero: true,
        beginAtZero: true,
        maxTicksLimit: 8,
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

const Graph = () => {
  return (
    <div className={`card ${styles.graphCard}`}>
      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.label}>Incomes</div>
          <div className={styles.graphAmount}>$0</div>
        </div>

        <div className={styles.datePicker}>
          <p>{labels[0]}</p>
          <p> - </p>
          <p>{labels[labels.length - 1]}</p>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
