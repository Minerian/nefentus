import { useEffect, useRef } from "react";
import HeadingCenter from "../headingCenter/headingCenter";

import styles from "./iconRow.module.css";

const IconRow = ({ subtitle, title, description, list }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = (scrollEvent) => {
      const minValue = window.innerHeight * 0.2;
      const scrollPos =
        window.innerHeight - sectionRef.current.getBoundingClientRect().top;

      if (scrollPos > minValue) {
        sectionRef.current.classList.add("cryptoIconShow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`container break ${styles.section}`}>
      <div className="scroll">
        <HeadingCenter noScroll subtitle={subtitle} title={title} />
        <p className={`${styles.description}`}>{description}</p>
      </div>
      <div className={`${styles.logos}`} ref={sectionRef}>
        {list.map((image, index) => (
          <div key={index}>
            <img src={image} alt="partner logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconRow;
