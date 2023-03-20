import Button from "../button/button";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Free Onboarding Call</h2>
      <p className={styles.description}>
        At Nefentus, we believe in supporting our clients every step of the way.
        That's why we offer free onboarding calls to assist with registration
        and setup. Whether you're a bar owner, consultant, coach, trainer,
        speaker, or agency owner, we're committed to finding the perfect
        solution for your unique needs.
      </p>
      <Button color="white">Book a call</Button>
    </div>
  );
};

export default Contact;
