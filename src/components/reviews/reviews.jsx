import HeadingCenter from "../headingCenter/headingCenter";

import styles from "./reviews.module.css";

import Image1 from "../../assets/image/reviews/image1.png";
import Image2 from "../../assets/image/reviews/image2.png";
import Image3 from "../../assets/image/reviews/image3.png";

const list = [
  {
    name: "Stephan Walouch",
    position: "Founder & CEO",
    image: Image1,
    message: "Nefentus increased my revenue and saved me time!",
  },
  {
    name: "Leon Enzminger",
    position: "Founder & CEO",
    image: Image2,
    message: "Thanks to Nefentus, I can focus on growing my business!",
  },
  {
    name: "Natalia Sakharova",
    position: "Head of Compliance",
    image: Image3,
    message:
      "Switching to Nefentus was the best decision I made for my payments!",
  },
];

const Reviews = () => {
  return (
    <div className={`container  ${styles.reviews}`}>
      <HeadingCenter
        subtitle="Reviews"
        title={
          <>
            Hear Directly from <br /> Our Customers
          </>
        }
      />

      <div className={styles.row}>
        {list.map((item) => (
          <div className="card scroll">
            <div className={styles.image}>
              <div className={styles.blur}>
                <div className={styles.overlay}></div>
                <img src={item.image} alt="" />
              </div>
              <p>{item.name}</p>
              <p>{item.position}</p>
            </div>

            <div className={styles.body}>
              <p className={styles.text}>{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
