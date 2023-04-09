import styles from "./graph.module.css";

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
import { Line } from "react-chartjs-2";

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

export default Graph;
