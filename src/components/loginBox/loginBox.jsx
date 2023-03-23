import Input from "../input/input";
import styles from "./loginBox.module.css";

import Logo from "../../assets/logo/logo.svg";
import Button from "./../button/button";
import { useState, useEffect } from "react";

const LoginBox = () => {

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('token')) {
      const paramValue = urlParams.get('token');
      activateUser(paramValue);
    } else {
      console.log("Param nicht gefunden!");
    }
  }, []);

  async function loginUser(username1, password1) {
    const url = 'http://127.0.0.1:8080/api/auth/signin';
  
    const loginRequest = {
      username: username1,
      password: password1,
    };
  
    console.log(loginRequest);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login erfolgreich:', data);
        // Verarbeiten Sie die Antwort, z. B. Token speichern, Nutzerdaten aktualisieren, etc.
      } else {
        console.error('Login fehlgeschlagen:', response.statusText);
        // Fehlerbehandlung, z. B. Fehlermeldung anzeigen
      }
    } catch (error) {
      console.error('Fehler beim Login:', error);
      // Fehlerbehandlung, z. B. Fehlermeldung anzeigen
    }
  }  

  const activateUser = async (token) => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/auth/activate', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Account successfully activated:', data);
      } else {
        console.error('Error activating account:', data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  function handleClick() {
    loginUser(Username,Password);
  }

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.top}>
          <img src={Logo} alt="" />

          <h3>Welcome back</h3>
        </div>

        <Input value={Username} setState={setUsername} label="Email" placeholder="you@email.com" />
        <Input value={Password} setState={setPassword} label="Password" secure placeholder="Password" />

        <Button onClick={handleClick} link="#">Sign in</Button>

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
