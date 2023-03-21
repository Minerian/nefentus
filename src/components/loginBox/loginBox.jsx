import Input from "../input/input";
import styles from "./loginBox.module.css";

import Logo from "../../assets/logo/logo.png";
import Button from "./../button/button";

const LoginBox = () => {
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={Logo} alt="" />

          <h3>Welcome back</h3>
        </div>

        <Input label="Email" placeholder="you@email.com" />
        <Input label="Password" secure placeholder="Password" />

        <Button>Sign in</Button>

        <div>
          <p>
            Don't have an account? <u>Sign up</u>
          </p>

          <p>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
