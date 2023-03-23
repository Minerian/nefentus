import styles from "./supportBody.module.css";

import Image1 from "../../assets/image/support/image1.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const list = [
  "Introduction",
  "Everything about payments",
  "Everything around the topic of products",
  "FAQ",
  "Nefentus Basics",
  "Nefentus Advanced",
  "Everything around the topic Affiliate",
];

const SupportBody = () => {
  const [active, setActive] = useState(0);

  const handleChange = (index) => {
    setActive(index);

    const element = document.getElementById("content");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={` ${styles.section}`}>
      <div className="container">
        <h2>Support Center Questions:</h2>
        <div className={`${styles.body}`}>
          <div className={styles.left} id="content">
            {active === 0 && <Introduction />}
            <Contact />
          </div>
          <div className={styles.right}>
            <div className={styles.list}>
              {list.map((item, index) => (
                <div
                  onClick={() => handleChange(index)}
                  className={`card ${styles.card} ${
                    active === index ? styles.active : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mobBody}>
          {/* <div>
            {list.map((item, index) => (
              <MobCard item={item} index={index} />
            ))}
          </div> */}

          <Contact />
        </div>
      </div>

      <div className={styles.blueBG}></div>
    </div>
  );
};

export default SupportBody;

const Introduction = () => {
  return (
    <div className={styles.content}>
      <h3>Welcome to the support page from Nefentus Solutions!</h3>
      <div className={styles.leftContent}>
        <p className={styles.description}>
          You can find all the information regarding Nefentus Solutions in this
          area. You can find detailed information on what you can do, links to
          frequently asked questions and popular blog posts, as well as a
          getting started guide that leads you through using the product
          step-by-step.
        </p>
        <img src={Image1} alt="" />
        <p className={styles.baner}>
          We've structured the documentation page into four groups:
        </p>

        <p className={styles.description}>
          1. Essential information about the product
        </p>
        <p className={styles.description}>
          2. Popular articles about product features
        </p>
        <p className={styles.description}>
          3. Additional resources you might find interesting
        </p>
        <p className={styles.description}>4. Ways to get in contact with us</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3>For more help, contact us!</h3>
      <p className={styles.description}>
        If you prefer a more personal touch, we're always here to help via phone
        or email. Whether you have a quick question or need more in-depth
        assistance, we're just a call or click away.
      </p>

      <div className={styles.cards}>
        <div className="card">
          <div className={styles.label}>
            <Link to="https://www.instagram.com/helpdesk.nefentus/">
              Write on Instagram
            </Link>
          </div>
          <div className={styles.info}>
            You can write on instagram on{" "}
            <u>
              <Link to="https://www.instagram.com/helpdesk.nefentus/">
                helpdesk.nefentus
              </Link>
            </u>
          </div>
        </div>
        <div className="card">
          <div className={styles.label}>support@nefentus.com</div>
          <div className={styles.info}>
            Your request will be answered within one day.
          </div>
        </div>
      </div>
    </div>
  );
};

const MobCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`card ${styles.card} `}
      style={{ maxHeight: open ? "100%" : "6rem" }}
      onClick={() => setOpen((prev) => !prev)}
    >
      {item}

      {index === 0 && <Introduction />}
    </div>
  );
};
