import Input from "../input/input";
import styles from "./loginBox.module.css";

import Logo from "../../assets/logo/logo.svg";
import Button from "./../button/button";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import backend_API from "../../api/backendAPI";

const LoginBox = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const backendAPI = new backend_API();
  const { t } = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("token")) {
      const paramValue = urlParams.get("token");
      activateUser(paramValue);
    } else {
    }
  }, []);

  async function loginUser(username1, password1) {
    try {
      const data = await backendAPI.login(username1, password1);
      navigate("/dashboard/affiliate");
    } catch (error) {
      setErrorMessage("Error:", error);
      console.error("Error:", error);
    }
  }

  const activateUser = async (token) => {
    try {
      const data = await backendAPI.activateAccount(token);
      setMessage("Account successfully activated");
      console.log("Account successfully activated:", data);
    } catch (error) {
      setErrorMessage("Error: ", error);
      console.error("Fetch error:", error);
    }
  };

  function handleClick() {
    loginUser(Username, Password);
  }

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={Logo} alt="" />

          <h3>{t("login.title")}</h3>
          <div>
            {errorMessage && (
              <div className={styles.errormessagecontainer}>
                <p>{errorMessage}</p>
              </div>
            )}
            {message && (
              <div className={styles.messagecontainer}>
                <p style={{ color: "green" }}>{message}</p>
              </div>
            )}
          </div>
        </div>

        <Input
          value={Username}
          setState={setUsername}
          label={t("signUp.emailLabel")}
          placeholder={t("signUp.emailPlaceholder")}
        />
        <Input
          value={Password}
          setState={setPassword}
          label={t("signUp.passwordLabel")}
          placeholder={t("signUp.passwordPlaceholder")}
          secure
        />

        <Button onClick={handleClick}>{t("login.button")}</Button>

        <div className={styles.info}>
          <p>
            {t("login.info")}
            <u>
              <Link to="/signUp">{t("login.infoButton")}</Link>
            </u>
          </p>

          <p>{t("login.forgot")}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
