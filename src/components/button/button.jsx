import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ children, color, link = "/signup", onClick }) => {
  return (
    <div
      className={styles.button}
      onClick={onClick}
      style={{
        background:
          color === "white"
            ? "#fff"
            : "linear-gradient(94.15deg, #0784B5 -27.47%, #66BFDE 118.26%)",
      }}
    >
      <Link to={link}>
        <div style={{ color: color === "white" ? "#000" : "#fff" }}>
          {children}
        </div>
      </Link>
    </div>
  );
};

export default Button;
