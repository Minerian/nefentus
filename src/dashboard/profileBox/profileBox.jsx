import styles from "./profileBox.module.css";

import Arrow from "../../assets/icon/dropdownWhite.svg";

const ProfileBox = () => {
  return (
    <div className={styles.profileBox}>
      <div className={styles.avatar}>
        <img src="" alt="" />
      </div>

      <div className={styles.info}>
        <div className={styles.nameBox}>
          <p className={styles.name}>Ruth J. Sharp</p>
          <img src={Arrow} alt="" />
        </div>
        <p className={styles.email}>ruth.sharp@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileBox;
