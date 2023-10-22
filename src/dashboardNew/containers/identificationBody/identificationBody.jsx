import { useState } from "react";
import Button from "../../components/button/button";
import Card from "../../components/card/card";
import SettingsTitle from "../../components/settings/settingsTitle";

import styles from "./identificationBody.module.css";
import { EditPopup } from "../../components/settings/settingsItem";

const IdentificationBody = () => {
  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <div className={styles.titleHeader}>
          <SettingsTitle
            title="Identification"
            description="Get your identity verified to buy and trade"
            identification
          />
        </div>

        <div className={styles.box}>
          <div className={styles.boxTitle}>Verification Levels</div>

          <div className={styles.row}>
            <div className={styles.rowLeft}>
              Level 1:{" "}
              <span>
                Personal Information, Government Issued ID and Facial
                Recognition
              </span>
            </div>
            <div
              className={styles.rowRight}
              style={{ color: true ? "#16C172" : "#F24236" }}
            >
              Verified
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              Level 2: <span> Proof of Address & Proof of Company</span>
            </div>
            <div
              className={styles.rowRight}
              style={{ color: true ? "#16C172" : "#F24236" }}
            >
              Verified
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              Level 3: <span> Enhanced Diligence</span>
            </div>
            <div
              className={styles.rowRight}
              style={{ color: !true ? "#16C172" : "#F24236" }}
            >
              Unverified
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.boxTitle}>Account Limit</div>

          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <span>Fiat Deposit & Withdrawal Limits</span>
            </div>
            <div className={styles.rowRight}>2M USD Daily</div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <span>Crypto Deposit Limit</span>
            </div>
            <div className={styles.rowRight}>Unlimited</div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <span>Crypto Withdrawal Limit</span>
            </div>
            <div className={styles.rowRight}>8M BUSD Daily</div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowLeft}>
              <span>P2P Transaction Limits</span>
            </div>
            <div className={styles.rowRight}>Unlimited</div>
          </div>
        </div>

        <div className={styles.uploadBox}>
          <div className={styles.boxTitle}>Get verified</div>

          <div className={styles.uploadItem}>
            <div className={`${styles.row} ${styles.rowItem}`}>
              <div className={styles.rowLeft}>Level 1:</div>
            </div>
            <AddText label="Full Name" />
            <AddText label="Address" />
            <AddText label="City and Zip Code" />
            <AddFile label="Government Issued ID" />
            <AddFile label="Picture with ID in hand" />
          </div>
          <div className={styles.uploadItem}>
            <div className={`${styles.row} ${styles.rowItem}`}>
              <div className={styles.rowLeft}>Level 2:</div>
            </div>
            <AddFile label="Proof of Address" />
            <AddFile label="Proof of Company" />
          </div>
          <div className={styles.uploadItem}>
            <div className={`${styles.row} ${styles.rowItem}`}>
              <div className={styles.rowLeft}>Level 3:</div>
            </div>
            <AddFile label="Enhanced Diligence" />
          </div>

          <div className={styles.button}>
            <Button>Confirm</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IdentificationBody;

const AddText = ({ label }) => {
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={`${styles.row} ${styles.formItem}`}>
        <div className={styles.rowLeft}>
          <span>{label}</span>
        </div>
        <div className={`${styles.rowRight} ${styles.rightUpload}`}>
          <p className={styles.lvl}>{value}</p>
          <Button onClick={() => setShow(true)} color="gray">
            Add
          </Button>
        </div>
      </div>

      <EditPopup
        show={show}
        setShow={setShow}
        value={value}
        setValue={setValue}
      />
    </>
  );
};

const AddFile = ({ label }) => {
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  const handleAddFile = (index) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.addEventListener("change", (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        const fileName = selectedFile.name; // Ovo je ime fajla
        const imageURL = URL.createObjectURL(selectedFile);

        setValue(fileName);
      }
    });
  };

  return (
    <>
      <div className={`${styles.row} ${styles.formItem}`}>
        <div className={styles.rowLeft}>
          <span>{label}</span>
        </div>
        <div className={`${styles.rowRight} ${styles.rightUpload}`}>
          <p className={styles.lvl}>{value}</p>
          <Button onClick={handleAddFile} color="gray">
            Upload
          </Button>
        </div>
      </div>
    </>
  );
};