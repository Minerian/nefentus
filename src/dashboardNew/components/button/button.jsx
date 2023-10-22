import { Link } from "react-router-dom";
import styles from "./button.module.css";

const Button = ({ children, color, onClick, link }) => {
  return (
    <div
      onClick={onClick}
      className={styles.button}
      style={{
        width: color === "gray" ? "7rem" : "",
        border: color === "gray" ? "1px solid rgba(255, 255, 255, 0.2)" : "",
      }}
    >
      <div
        className={styles.background}
        style={{
          backgroundColor:
            color === "light"
              ? "#222836"
              : color === "gray"
              ? "rgba(255, 255, 255, 0.08)"
              : "#0784B5",
        }}
      ></div>

      {link ? (
        <Link to={link}>
          <div
            style={{
              fontSize: color === "gray" ? "1rem" : "",
            }}
            className={styles.text}
          >
            {children}
          </div>
        </Link>
      ) : (
        <div
          style={{
            fontSize: color === "gray" ? "1rem" : "",
          }}
          className={styles.text}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Button;