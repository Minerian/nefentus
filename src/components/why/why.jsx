import styles from "./why.module.css";

import Image from "../../assets/image/why.png";

const Why = () => {
  return (
    <div className={`container break ${styles.section}`}>
      <img src={Image} alt="" />

      <div className={styles.content}>
        <h2>Why Nefentus?</h2>

        <div>
          <h4>Made in Europe</h4>
          <p>
            Our in-house team of expert IT specialists continuously develops and
            improves Nefentus to the highest standards,
          </p>
        </div>
        <div>
          <h4>GDPR compliant</h4>
          <p>
            We prioritize data protection, adhering to the highest security and
            privacy standards to ensure the protection of your company and
            customers' data.
          </p>
        </div>
        <div>
          <h4>Secure</h4>
          <p>
            With our powerful and secure servers that offer 100% availability,
            you can trust that your website will always be accessible, and your
            data will always be safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
