import styles from "./button.module.css";

const Button = ({ children, color }) => {
  return (
    <div
      className={styles.button}
      style={{
        background:
          color === "white"
            ? "#fff"
            : "linear-gradient(94.15deg, #0784B5 -27.47%, #66BFDE 118.26%)",
      }}
    >
      <div style={{ color: color === "white" ? "#000" : "#fff" }}>
        {children}
      </div>
    </div>
  );
};

export default Button;
