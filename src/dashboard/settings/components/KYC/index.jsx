import File from "../../../../assets/icon/file.svg";
import Correct from "../../../../assets/icon/correct.svg";
import Fail from "../../../../assets/icon/fail.svg";
import { Buttons } from "../buttons";
import styles from "../../settings.module.css";
import { useEffect, useRef, useState } from "react";
import backendAPI from "../../../../api/backendAPI";

const KYC_TYPE = {
  PASSPORT: "PASSPORT",
  PERSONAL_PICTURE: "PERSONAL_PICTURE",
  COMPANY_REGISTRATION: "COMPANY_REGISTRATION",
  UTILITY_BILL: "UTILITY_BILL",
  ADRESS: "ADRESS",
};
const KYCContent = [
  {
    id: KYC_TYPE.PASSPORT,
    label: "Passport or ID card",
  },
  {
    id: KYC_TYPE.PERSONAL_PICTURE,
    label: "Picture with passport/ID",
  },
  {
    id: KYC_TYPE.COMPANY_REGISTRATION,
    label: "Company registration",
  },
  {
    id: KYC_TYPE.ADRESS,
    label: "Proof of address",
  },
  {
    id: KYC_TYPE.UTILITY_BILL,
    label: "Due deligence",
  },
];

const INITIAL_FILES = {
  [KYC_TYPE.PASSPORT]: null,
  [KYC_TYPE.PERSONAL_PICTURE]: null,
  [KYC_TYPE.COMPANY_REGISTRATION]: null,
  [KYC_TYPE.UTILITY_BILL]: null,
  [KYC_TYPE.ADRESS]: null,
};

export const KYC = () => {
  const backendapi = new backendAPI();
  const [statusIndex, setStatusIndex] = useState(0);
  const [level, setLevel] = useState(0);
  const [uploadingFiles, setUploadingFiles] = useState(INITIAL_FILES);

  const [files, setFiles] = useState({
    [KYC_TYPE.PASSPORT]: null,
    [KYC_TYPE.PERSONAL_PICTURE]: null,
    [KYC_TYPE.COMPANY_REGISTRATION]: null,
    [KYC_TYPE.UTILITY_BILL]: null,
    [KYC_TYPE.ADRESS]: null,
  });

  const fetchFYC = async () => {
    const userId = localStorage.getItem("userId");
    const level = await backendapi.getKYCLevel(userId);

    const arrayWithResults = await Promise.all(
      Object.values(KYC_TYPE).map((type) => backendapi.getByKYC(type, userId)),
    );

    const transformedResults = arrayWithResults?.value
      .map((item) => {
        const key = Object.keys(item)[0];
        return { [key]: item[key].data };
      })
      .reduce((acc, curr) => ({ ...acc, ...curr }), {});
    setFiles(transformedResults);
    setLevel(level.data.kycLevel);
  };

  useEffect(() => {
    fetchFYC();
  }, []);

  const inputRef = useRef(null);

  const [selectingType, setSelectingType] = useState(KYC_TYPE.PASSPORT);

  const onChange = async () => {
    if (statusIndex >= KYCContent.length) {
      return null;
    }

    if (inputRef.current.files.length > 0) {
      setUploadingFiles({
        ...uploadingFiles,
        [selectingType]: inputRef.current.files[0],
      });
      backendapi.uploadKYCByType(selectingType, inputRef.current.files[0]);
    }
  };

  const handleUpload = async () => {
    const arrayWithResults = await Promise.allSettled(
      Object.keys(uploadingFiles).map((type) =>
        backendapi.uploadKYCByType(type, uploadingFiles[type]),
      ),
    );
    if (arrayWithResults?.value) {
      fetchFYC();
      setUploadingFiles(INITIAL_FILES);
    }
  };

  const handleRemove = (type) => {
    setUploadingFiles({ ...uploadingFiles, [type]: null });
  };

  const handleSelectType = (id) => {
    setSelectingType(id);
  };

  return (
    <div className={styles.kyc}>
      <h4 className={styles.name}>Current KYC level: {level}</h4>
      {files[selectingType] && files[selectingType]["url"] ? (
        <div className={styles.kycImageContainer}>
          <img className={styles.kycImage} src={files[selectingType]["url"]} />
        </div>
      ) : (
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
      )}

      <div className={styles.kycList}>
        {KYCContent.map((item, index) => (
          <div
            key={index}
            className={`${styles.kycItem} ${
              selectingType === item.id ? styles.itemActive : ""
            }`}
            onClick={() => {
              handleSelectType(item.id);
              setStatusIndex(index);
            }}
          >
            <div className={styles.kycLabelSection}>
              <div className={styles.kycLabel}>
                {item.label}{" "}
                {files[item.id]?.required && !files[item.id]?.verify && (
                  <span className={styles.kycRequired}>*</span>
                )}
              </div>

              <div className={styles.kycStatus}>
                {files[item.id]?.url &&
                  (files[item.id].verify ? (
                    <img src={Correct} alt="" />
                  ) : (
                    "(waiting verification)"
                  ))}
              </div>
            </div>

            {uploadingFiles[item.id] && (
              <div
                className={styles.kycStatus}
                onClick={() => handleRemove(item.id)}
              >
                <p>
                  {uploadingFiles[item.id] ? uploadingFiles[item.id].name : ""}
                </p>
                <img src={Fail} alt="" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Buttons functions={["", handleUpload]} buttons={["Cancel", "Confirm"]} />
    </div>
  );
};
