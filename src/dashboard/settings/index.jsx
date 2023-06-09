import { Attachment, Authentificator } from "../input/input";
import Input from "../../components/input/input";
import styles from "./settings.module.css";
import { useEffect, useRef, useState } from "react";

import Logo from "../../assets/logo/logo.svg";

import File from "../../assets/icon/file.svg";

import Correct from "../../assets/icon/correct.svg";
import Fail from "../../assets/icon/fail.svg";
import Button from "../../components/button/button";
import { Link, useNavigate } from "react-router-dom";
import backend_API from "../../api/backendAPI";
import Cookies from "universal-cookie";
import { loadLanguages, use } from "i18next";
import InputComponent from "../input/input";
import backendAPI from "../../api/backendAPI";
import Header from "../header/header";
import BlobPicture from "../../components/blobPicture/blobPicture";

const nav = [
  "Profile",
  "Change Password",
  <div>
    <span className={styles.rest}>Know Your Customer(</span>KYC
    <span className={styles.rest}>)</span>
  </div>,
];

const instruction = [
  {
    title: "Personal information",
    description:
      "Some of fields can’t be changed here. Please contact our support for that.",
  },
  {
    title: "Password",
    description:
      "Please enter your current password and security code to change your password",
  },
  {
    title: "Confirm",
    description:
      "Please confirm your identity. Company registration and utility bill can't be older than 6 months.",
  },
];

const SettingsBody = ({ type }) => {

  const backendapi = new backendAPI();
  const [active, setActive] = useState(0);
  const [profilePicUrl, setProfilePicUrl] = useState(
    localStorage.getItem("profile_pic")
  );
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleStorageChange = () => {
      setProfilePicUrl(localStorage.getItem("profile_pic"));
      setCounter(counter + 1);
    };

    async function checkJwtAndNavigate() {
      const jwtIsValid = await backendapi.checkJwt();
      if (jwtIsValid) {
        const roles = localStorage.getItem("roles");
        const roleArray = roles.split(","); // Konvertiert den String in ein Array von Strings
        const isAdmin = roleArray.includes("ROLE_ADMIN"); // Überprüft, ob "ROLE_ADMIN" im Array enthalten ist
        const isVendor = roleArray.includes("ROLE_VENDOR"); // Überprüft, ob "ROLE_VENDOR" im Array enthalten ist
        const isAffiliate = roleArray.includes("ROLE_AFFILIATE"); // Überprüft, ob "ROLE_VENDOR" im Array enthalten ist
        if (isAdmin) { setLink("/dashboard/admin"); }
        else if (isAffiliate) { setLink("/dashboard/affiliate"); }
        else if (isVendor) { setLink("/dashboard/vendor"); }
      }else{
        navigate("/login");
      }
    }

    checkJwtAndNavigate();

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [counter]);

  const cookies = new Cookies();
  const [link, setLink] = useState("");
  return (
    <div
      className={`${styles.body} ${
        type === "vendor" ? "dashboard-body" : "container"
      }`}
      style={{ paddingTop: type === "vendor" ? "0" : "2rem" }}
    >
      {type === "vendor" ? (
        <Header title={"Settings"} />
      ) : (
        <>
          <div className={styles.navigation}>
            <img src={Logo} alt="" />

            <div className={styles.button}>
              <Link to={link} color="white">
                Back to dashboard
              </Link>
            </div>
          </div>
        </>
      )}

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <BlobPicture/>
        </div>

        <div className={styles.info}>
          <p className={styles.name}>
            {localStorage.getItem("firstName") +
              " " +
              localStorage.getItem("lastName")}
          </p>
          <p className={styles.email}>{localStorage.getItem("email")}</p>
        </div>
      </div>

      <div className={`${styles.settingsBody} card`}>
        <div className={styles.settingsNav}>
          {nav.map((item, index) => (
            <div
              className={styles.item}
              onClick={() => setActive(index)}
              style={{
                borderColor: active === index ? "#fff" : "transparent",
                color: active === index ? "#fff" : "#c4c4c4",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className={styles.info}>
          <h4>{instruction[active].title}</h4>
          <p>{instruction[active].description}</p>
        </div>

        {active === 0 ? (
          <ProfileBody />
        ) : active === 1 ? (
          <PasswordBody />
        ) : (
          <KYC />
        )}
      </div>
    </div>
  );
};

export default SettingsBody;

const ProfileBody = () => {
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState(
    localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
  );
  const [business, setBusiness] = useState(localStorage.getItem("business"));
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber")
  );
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  const profileContent = [
    {
      label: "Full Name",
      type: "text",
      value: fullName,
      onChange: setFullName,
    },
    {
      label: "Email Address",
      type: "text",
      value: email,
      onChange: setEmail,
    },
    {
      label: "Business",
      type: "text",
      value: business,
      onChange: setBusiness,
    },
    {
      label: "Phone Number",
      type: "text",
      value: phoneNumber,
      onChange: setPhoneNumber,
    },
  ];

  const backendAPI = new backend_API();

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const checkErrors = () => {
    if (!fullName || !fullName.trim()) {
      setErrorMessage("Full name is required.");
      return null;
    }

    if (!business || !business.trim()) {
      setErrorMessage("Business name is required.");
      return null;
    }

    if (!phoneNumber || !phoneNumber.trim()) {
      setErrorMessage("Phone number is required.");
      return null;
    }

    if (!email || !email.trim()) {
      setErrorMessage("Email is required.");
      return null;
    }

    return true;
  };

  const handleConfirm = async () => {
    if (checkErrors() == null) {
      return;
    }
    setErrorMessage(null);

    const requestData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      business: business,
    };

    if (file) {
      const response = await backendAPI.uploadFile(file);
      if (response == null) {
        setErrorMessage("Error on uploading the profile picture");
        return;
      }
    }

    const response2 = await backendAPI.update(requestData);
    if (response2 == null) {
      setErrorMessage("Error on updating data");
      return;
    }
    window.location.reload();
  };

  const resetValues = () => {
    setFullName(
      localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
    );
    setBusiness(localStorage.getItem("business"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
    setEmail(localStorage.getItem("email"));
  };

  return (
    <div>
      <div>
        {errorMessage && (
          <div className={styles.errormessagecontainer}>
            <p style={{ color: "red" }}> {errorMessage}</p>
          </div>
        )}
        {message && (
          <div className={styles.messagecontainer}>
            <p style={{ color: "green" }}>{message}</p>
          </div>
        )}
      </div>
      {profileContent.map((item) => (
        <div>
          <InputComponent
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
            value={item.value}
            setState={item.onChange}
          />
        </div>
      ))}

      <Attachment label="Upload logo image" onUpload={handleUpload} />

      <Buttons
        functions={[resetValues, handleConfirm]}
        buttons={["Reset", "Confirm"]}
      />
    </div>
  );
};

const PasswordBody = () => {
  const [openBox, setOpenBox] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMessageBox, setErrorMessageBox] = useState(null);

  const backendAPI = new backend_API();

  const passwordContent = [
    {
      label: "Current Password",
      placeholder: "Enter your password",
      type: "password",
      value: currentPassword,
      onChange: setCurrentPassword,
    },
    {
      label: "New Password",
      placeholder: "Enter new password",
      type: "password",
      value: newPassword,
      onChange: setNewPassword,
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm new password",
      type: "password",
      value: confirmPassword,
      onChange: setConfirmPassword,
    },
  ];

  const handleConfirm = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords are not equal");
      return;
    }

    const response = await backendAPI.forgotPasswordDashboard(
      newPassword,
      currentPassword
    );
    if (response == null) {
      setErrorMessage("Old password is not the right one!");
      return;
    }
    setErrorMessage(null);
    setOpenBox(true);
  };

  const handleConfirmCode = async () => {
    const response = await backendAPI.resetPasswordDashboard(verificationCode);
    if (response == null) {
      setErrorMessageBox("Code is not valid or too old!");
      return;
    }
    setErrorMessageBox(null);
    setMessage("Password succesfully changed!");
    resetValues();
    setOpenBox(false);
  };

  const resetValues = () => {
    setConfirmPassword(null);
    setCurrentPassword(null);
    setNewPassword(null);
  };

  const handleClose = () => {
    setOpenBox(false);
  };

  return (
    <div>
      {openBox && (
        <div className={styles.modal}>
          <div className={`${styles.popup} card`}>
            <p>Enter verification code:</p>
            {errorMessageBox && (
              <div className={styles.errormessagecontainer}>
                <p style={{ color: "red" }}> {errorMessage}</p>
              </div>
            )}
            <InputComponent
              value={verificationCode}
              setState={setVerificationCode}
            />

            <Buttons
              functions={[handleClose, handleConfirmCode]}
              buttons={["Cancel", "Confirm"]}
            />
          </div>
        </div>
      )}
      {errorMessage && (
        <div className={styles.errormessagecontainer}>
          <p style={{ color: "red" }}> {errorMessage}</p>
        </div>
      )}
      {message && (
        <div className={styles.messagecontainer}>
          <p style={{ color: "green" }}>{message}</p>
        </div>
      )}
      {passwordContent.map((item) => (
        <div>
          <InputComponent
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
            setState={item.onChange}
            value={item.value}
            secure
          />
        </div>
      ))}
      <Authentificator
        placeholder={"Google Authentificator"}
        connected={true}
        handleClick={() => {}}
      />
      <Buttons functions={["", handleConfirm]} buttons={["Reset", "Confirm"]} />
    </div>
  );
};

const KYCContent = [
  {
    label: "Upload Passport",
  },
  {
    label: "Picture of You",
  },
  {
    label: "Company Registration",
  },
  {
    label: "Utility Bill",
  },
  {
    label: "Adress verification",
  },
];

const KYC = () => {
  const [statusIndex, setStatusIndex] = useState(0);

  const inputRef = useRef(null);

  const [fileStatus, setFileStatus] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onChange = () => {
    if (statusIndex >= KYCContent.length) {
      return null;
    }

    const fileName = inputRef.current.value.split("\\").pop();

    setFileStatus((prev) => {
      prev[statusIndex] = fileName;

      return [...prev];
    });

    let nextIndex = -1;

    for (let i = 0; i < fileStatus.length; i++) {
      if (statusIndex === i) continue;

      if (!fileStatus[i]) {
        nextIndex = i;
        break;
      }
    }

    setStatusIndex((prev) => nextIndex);
  };

  const handleRemove = (index) => {
    setFileStatus((prev) => {
      prev[index] = false;

      return [...prev];
    });

    setStatusIndex(index);
  };

  return (
    <div className={styles.kyc}>
      <div className={styles.kycDrop}>
        <img src={File} alt="" />

        <input
          onChange={onChange}
          ref={inputRef}
          type="file"
          className={styles.attachment}
        />

        <div>
          <div className={styles.main}>
            {statusIndex > -1
              ? `Drag and drop your ${KYCContent[statusIndex].label} here`
              : "You need to confirm it now."}
          </div>
          <div className={styles.size}>10MB max file size</div>
        </div>
      </div>

      <div className={styles.kycList}>
        {KYCContent.map((item, index) => (
          <div className={styles.kycItem}>
            <div className={styles.kycLabel}>{item.label}</div>

            <div
              className={styles.kycStatus}
              onClick={() => handleRemove(index)}
            >
              <p>{fileStatus[index] ? fileStatus[index] : ""}</p>

              <img src={fileStatus[index] ? Correct : Fail} alt="" />
            </div>
          </div>
        ))}
      </div>

      <Buttons functions={["", ""]} buttons={["Cancel", "Confirm"]} />
    </div>
  );
};

const Buttons = ({ buttons, functions }) => {
  return (
    <div className={styles.buttons}>
      <div onClick={functions[0]} className={styles.button1}>
        {buttons[0]}
      </div>
      <div onClick={functions[1]} className={styles.button2}>
        {buttons[1]}
      </div>
    </div>
  );
};
