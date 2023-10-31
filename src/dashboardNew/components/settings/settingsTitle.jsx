import Button from "../button/button";
import styles from "./settingsTitle.module.css";

const SettingsTitle = ({
  title,
  description,
  identification,
  product,
  onCreate,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>

      {identification && <div className={styles.level}>Level: X</div>}
      {product && (
        <div>
          <Button onClick={onCreate}>Create New Product</Button>
        </div>
      )}
    </div>
  );
};

export default SettingsTitle;
