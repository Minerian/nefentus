import Input from "../input/input";
import styles from "./loginBox.module.css";

import Logo from "../../assets/logo/logo.svg";
import Button from "./../button/button";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('token')) {
      const paramValue = urlParams.get('token');
      activateUser(paramValue);
    } else {
    }
  }, []);

  async function loginUser(username1, password1) {
    const url = 'http://127.0.0.1:8080/api/auth/signin';

    const loginRequest = {
      username: username1,
      password: password1,
    };

    console.log(loginRequest);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    }).then((response) => {
      if (!response.ok) {
        setErrorMessage("Login failed");
        throw new Error("Login failed");
      }
      return response.json();
    })
      .then((data) => {
        const jwtCookie = data.jwtToken;
        const token = jwtCookie.split(";")[0].split("=")[1];
        localStorage.setItem("token", token);
        localStorage.setItem("email", data.email);
        localStorage.setItem('affiliateLink', data.affiliateLink);
        navigate("/dashboard/affiliate");
      })
      .catch((error) => {
        setErrorMessage("Error:", error);
        console.error("Error:", error);
      });
  }

  const activateUser = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/auth/activate', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: token,
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Account successfully activated')
        console.log('Account successfully activated:', data);
      } else {
        console.error('Error activating account:', data);
      }
    } catch (error) {
      setErrorMessage('Error: ', error)
      console.error('Fetch error:', error);
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

          <h3>Welcome back</h3>
          <div>
            {errorMessage && (
              <div className={styles.errormessagecontainer}>
                <p>{errorMessage}</p>
              </div>
            )}
            {message && (
              <div className={styles.messagecontainer}>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>

        <Input value={Username} setState={setUsername} label="Email" placeholder="you@email.com" />
        <Input value={Password} setState={setPassword} label="Password" secure placeholder="Password" />

        <Button onClick={handleClick}>Sign in</Button>

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
