import HeadingCenter from "../headingCenter/headingCenter";

import styles from "./reviews.module.css";

import Image1 from "../../assets/image/reviews/image1.png";
import Image2 from "../../assets/image/reviews/image2.png";
import Image3 from "../../assets/image/reviews/image3.png";
import { useTranslation } from "react-i18next";

const list = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
];

const Reviews = () => {
  const { t } = useTranslation();

  const content = t("home.reviewList", { returnObjects: true });

  return (
    <div className={`container  ${styles.reviews}`}>
      <HeadingCenter
        subtitle={t("home.reviewSubtitle")}
        title={
          <>
            {t("home.reviewTitleP1")}
            <br />
            {t("home.reviewTitleP2")}
          </>
        }
      />

      <div className={styles.row}>
        {list.map((item, index) => (
          <div key={index} className="card scroll">
            <div className={styles.image}>
              <div className={styles.blur}>
                <div className={styles.overlay}></div>
                <img src={item.image} alt="" />
              </div>
              <p>{content[index].name}</p>
              <p>{content[index].position}</p>
            </div>

            <div className={styles.body}>
              <p className={styles.text}>{content[index].message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
