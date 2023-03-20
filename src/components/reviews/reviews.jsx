import HeadingCenter from "../headingCenter/headingCenter";

import styles from "./reviews.module.css";

import Quote from "../../assets/icon/quote.svg";

const Reviews = () => {
  return (
    <div className="container">
      <HeadingCenter
        subtitle="Reviews"
        title="Hear Directly from Our Customers"
      />

      <div className={styles.row}>
        <div className="card">
          <div className={styles.image}>
            <div className={styles.blur}>
              <div className={styles.overlay}></div>
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <p>Sho Sugihara</p>
            <p>Founder & CEO</p>
          </div>

          <div className={styles.body}>
            <div className={styles.quote}>
              <img src={Quote} alt="" />
              <p>SHO’S STORY</p>
            </div>
            <p className={styles.text}>
              Nefentus increased my revenue and saved me time!
            </p>
          </div>
        </div>
        <div className="card">
          <div className={styles.image}>
            <div className={styles.blur}>
              <div className={styles.overlay}></div>
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <p>Aj Agrawal</p>
            <p>Founder & CEO</p>
          </div>

          <div className={styles.body}>
            <div className={styles.quote}>
              <img src={Quote} alt="" />
              <p>AJ'S STORY</p>
            </div>
            <p className={styles.text}>
              Thanks to Nefentus, I can focus on growing my business!
            </p>
          </div>
        </div>
        <div className="card">
          <div className={styles.image}>
            <div className={styles.blur}>
              <div className={styles.overlay}></div>
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <p>Zaire Allen</p>
            <p>Founder</p>
          </div>

          <div className={styles.body}>
            <div className={styles.quote}>
              <img src={Quote} alt="" />
              <p>ZAIRE'S STORY</p>
            </div>
            <p className={styles.text}>
              Switching to Nefentus was the best decision I made for my
              payments!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
