import Logo from "../../assets/logo/logo.png";
import Button from "../button/button";
import Input, { Options } from "../input/input";

import styles from "./signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <img src={Logo} alt="" />

        <div>
          <h2>
            Get started with <br /> Nefentus
          </h2>
          <p>
            Start now, it is free. Nefentus helps you manage your business
            operations in a compliant and sustainable way.
          </p>

          <p>
            Already have an account? <u>Sign in</u>
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.row}>
          <Input label={"First name"} placeholder="John" />
          <Input label={"Last name"} placeholder="Doe" />
        </div>
        <Input label={"Telefon"} placeholder="(979) 268-4143" />
        <Input label={"Email"} placeholder="you@email.com" />
        <Input label={"Password"} placeholder="Password" secure />
        <Options />
        <Button>Create Account</Button>

        <p>
          By signing up, you agree to out <b>Privacy Policy</b> and{" "}
          <b>Terms of Service</b>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
