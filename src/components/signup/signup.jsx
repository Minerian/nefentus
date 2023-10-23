import Logo from "../../assets/logo/logo2.svg";
import Button from "../button/button";
import Input, { SearchOptions } from "../input/input";
import styles from "./signup.module.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import backendAPI from "../../api/backendAPI";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import isMobilePhone from "../../func/isMobilePhone";
import Error from "../error/error";

var country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D'Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const Signup = () => {
  const recaptchaRef = useRef();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [CountryOption, setCountryOption] = useState("");
  const api = new backendAPI();

  const schema = z
    .object({
      firstName: z.string().min(1, { message: "Please enter your first name" }),
      lastName: z.string().min(1, { message: "Please enter your last name" }),
      telNr: z
        .string()
        .min(1, { message: "Please enter your phone number" })
        .refine(isMobilePhone, {
          message: "Please enter a valid phone number",
        }),
      email: z
        .string()
        .min(1, { message: "Please enter your email" })
        .email({ message: "Please enter a valid email" }),
      password: z
        .string()
        .min(1, { message: "Please enter your password" })
        .min(8, { message: "Password must be at least 8 characters" })
        .refine(
          (value) =>
            /^(?:(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[.\$\/@!%&*_,#*-+;`])|(?=.*[a-z])(?=.*\d)(?=.*[.\$\/@!%&*_,#*-+;`])|(?=.*[A-Z])(?=.*\d)(?=.*[.\$\/@!%&*_,#*-+;`])|(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.\$\/@!%&*_,#*-+;`])).*$/.test(
              value,
            ),
          {
            message:
              "Password must include characters from 3 of the following 4 groups: uppercase letters, lowercase letters, numbers, and special characters",
          },
        ),
      confirmPassword: z
        .string()
        .nonempty({ message: "Confirm your password" }),
    })
    .refine(
      (schemaData) => schemaData.password === schemaData.confirmPassword,
      {
        message: "Passwords must match",
        path: ["confirmPassword"],
      },
    );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onSubmit" });

  const resetForm = () => {
    reset();
    setCountryOption(t("signUp.option1Placeholder"));
  };

  async function submitForm(data) {
    if (CountryOption === t("signUp.option1Placeholder")) {
      setErrorMessage("Please choose a country");
      return;
    }

    const captchaValue = recaptchaRef.current.getValue();

    if (!captchaValue) {
      setErrorMessage("Please verify the reCAPTCHA!");
    } else {
      const requestData = {
        ...data,
        roles: ["Affiliate"],
        country: CountryOption,
        affiliateLink: localStorage.getItem("affiliateJoined"),
      };

      const response = await api.register(requestData);
      if (response == null) {
        setErrorMessage("Error when registering");
      } else {
        setMessage("Please confirm your email address to proceed.");
      }
      resetForm();
      setErrorMessage(null);
    }
  }

  return (
    <div className={`${styles.signup}`}>
      <div className={styles.closeWrapper}>
        <Button link={"/"} color={"white"}>
          {t("login.close")}
        </Button>
      </div>
      <div className={styles.left}>
        <img src={Logo} alt="nefentus logo" />

        <div>
          <h2>
            {t("signUp.titleP1")}
            <br />
            <span className="gradient">{t("signUp.titleP2")}</span>
          </h2>
          <p>{t("signUp.description")}</p>

          <p>
            {t("signUp.info")}
            <u>
              <Link to="/login">{t("signUp.infoButton")}</Link>
            </u>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(submitForm)} className={styles.right}>
        <Error
          error={
            errorMessage ||
            errors.firstName?.message ||
            errors.lastName?.message ||
            errors.telNr?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.confirmPassword?.message
          }
        />
        {message && (
          <div className={styles.messagecontainer}>
            <p>{message}</p>
          </div>
        )}

        <div className={styles.row}>
          <Input
            label={t("signUp.firstNameLabel") + "*"}
            placeholder={t("signUp.firstNamePlaceholder")}
            register={register}
            name={"firstName"}
          />

          <Input
            label={t("signUp.lastNameLabel") + "*"}
            placeholder={t("signUp.lastNamePlaceholder")}
            register={register}
            name={"lastName"}
          />

          <Input
            label={t("signUp.telefonLabel")}
            placeholder="(979) 268-4143"
            register={register}
            name={"telNr"}
          />
          <Input
            label={t("signUp.emailLabel") + "*"}
            placeholder={t("signUp.emailPlaceholder")}
            register={register}
            name={"email"}
          />
          <Input
            label={t("signUp.passwordLabel") + "*"}
            placeholder={t("signUp.passwordPlaceholder")}
            register={register}
            name={"password"}
            secure
          />
          <Input
            label={t("signUp.confirmPasswordLabel") + "*"}
            placeholder={t("signUp.confirmPasswordPlaceholder")}
            register={register}
            name={"confirmPassword"}
            secure
          />
          <SearchOptions
            label={t("signUp.option1Label")}
            value={CountryOption}
            setValue={setCountryOption}
            options={country_list}
            placeholder={t("signUp.option1Placeholder")}
          />
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.VITE_REACT_APP_RECAPTCHA_SITE_KEY}
          theme="dark"
        />

        <div className={styles.buttonWrapper}>
          <Button className={styles.button} type="submit">
            {t("signUp.formButton")}
          </Button>
        </div>

        <p className={styles.formAgreement}>{t("signUp.formInfo")}</p>
      </form>
    </div>
  );
};

export default Signup;
