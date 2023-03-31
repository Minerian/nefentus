import Input, { Attachment, Authentificator } from "../input/input";
import styles from "./settings.module.css";
import { useRef, useState } from "react";

import Logo from "../../assets/logo/logo.svg";

import File from "../../assets/icon/file.svg";

import Correct from "../../assets/icon/correct.svg";
import Fail from "../../assets/icon/fail.svg";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import backend_API from "../../api/backendAPI";
import Cookies from "universal-cookie";


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

const SettingsBody = () => {
  const [active, setActive] = useState(0);
const cookies = new Cookies();
  return (
    <div className={`${styles.body} container`}>
      <div className={styles.navigation}>
        <img src={Logo} alt="" />

        <div className={styles.button}>
          <Link to="/dashboard/affiliate" color="white">
            Back to dashboard
          </Link>
        </div>
      </div>

      <div className={styles.profile}>
        <div className={styles.avatar}>
        <img src={localStorage.getItem("profile_pic")} alt="Profile picture" />
        </div>

        <div className={styles.info}>
          <p className={styles.name}>{localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")}</p>
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

const profileContent = [
  {
    label: "Full Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    label: "Username",
    placeholder: "Enter your username",
    type: "text",
  },
  {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "text",
  },
  {
    label: "Business",
    placeholder: "Enter your bussiness",
    type: "text",
  },
  {
    label: "Phone Number",
    placeholder: "Enter your number",
    type: "text",
  },
  {
    label: "Support Email Address",
    placeholder: "Enter email for support",
    type: "text",
  },
];

const ProfileBody = () => {
  const [file, setFile] = useState(null);

  const backendAPI = new backend_API(); 

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleConfirm = () => {
    if (file) {
      backendAPI.uploadFile(file);
    } else {
      // TODO: show error, maybe with toast!
    }
  };

  return (
    <div>
      {profileContent.map((item) => (
        <div>
          <Input
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
          />
        </div>
      ))}

      <Attachment label="Upload logo image" onUpload={handleUpload} />

      <Buttons functions={["", handleConfirm]} buttons={["Reset", "Confirm"]} />
    </div>
  );
};

const passwordContent = [
  {
    label: "Current Password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    label: "New Password",
    placeholder: "Enter new password",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm new email",
    type: "password",
  },
  {
    label: "Email Authentification",
    placeholder: "Enter email for authentification",
    type: "text",
  },
];

const PasswordBody = () => {
  return (
    <div>
      {passwordContent.map((item) => (
        <div>
          <Input
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
          />
        </div>
      ))}

      <Authentificator
        placeholder={"Google Authentificator"}
        connected={true}
        handleClick={() => {}}
      />

      <Buttons functions={["", ""]} buttons={["Reset", "Confirm"]} />
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
