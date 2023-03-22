import Logo from "../../assets/logo/logo.png";
import Button from "../button/button";
import Input, { Options } from "../input/input";

import styles from "./signup.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Signup = () => {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('affiliate')) {
      const paramValue = urlParams.get('affiliate');
      console.log("Param gefunden: ", paramValue);
    } else {
      console.log("Param nicht gefunden!");
    }
  }, []);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Telefon, setTelefon] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [UseOption, setUseOption] = useState('Choose Options');

  async function submitForm() {
    const requestData = {
      firstName: FirstName,
      lastName: LastName,
      telNr: Telefon,
      email: Email,
      password: Password,
      role: [UseOption],
      username: Email // Optional: Verwenden Sie den Teil vor dem @-Zeichen der E-Mail als Benutzername
    };

    try {
      const response = await fetch("http://127.0.0.1:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        setErrorMessage(`HTTP error: ${response.status}`);
        throw new Error(`HTTP error: ${response.status}`);
      }
      const responseBody = await response.json();
      console.log("Response from server:", responseBody);
      navigate("/")
    } catch (error) {
      setErrorMessage("Error submitting form:", error);
      console.error("Error submitting form:", error);
    }
  }


  function handleClick() {
    submitForm();
  }

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
        {errorMessage && (
          <div className={styles.errormessagecontainer}>
            <p>{errorMessage}</p>
          </div>
        )}
        <div className={styles.row}>
          <Input label={"First name"} placeholder="John" value={FirstName} setState={setFirstName} />
          <Input label={"Last name"} placeholder="Doe" value={LastName} setState={setLastName} />
        </div>
        <Input label={"Telefon"} placeholder="(979) 268-4143" value={Telefon} setState={setTelefon} />
        <Input label={"Email"} placeholder="you@email.com" value={Email} setState={setEmail} />
        <Input label={"Password"} placeholder="Password" value={Password} setState={setPassword} secure />
        <Options value={UseOption} setValue={setUseOption} />
        <a onClick={handleClick}><Button>Create Account</Button></a>

        <p>
          By signing up, you agree to out <b>Privacy Policy</b> and{" "}
          <b>Terms of Service</b>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
