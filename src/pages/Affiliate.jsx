import Layout from "./../components/layout/layout";

import Image from "../assets/image/affiliate.svg";
import Why from "./../components/why/why";
import Compare from "../components/compare/compare";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Affiliate = () => {
  useEffect(() => {
    checkPermissions();
  });

  const checkPermissions = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Der Benutzer ist nicht angemeldet
      return;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch("http://localhost:8080/api/test/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { t } = useTranslation();

  const content = t("affiliate.whyContent", { returnObjects: true });

  return (
    <div>
      <Layout
        subtitle={t("affiliate.heroSubtitle")}
        heading={t("affiliate.heroHeading")}
        description={t("affiliate.heroDescription")}
        button={<>{t("affiliate.heroButton")}</>}
        image={Image}
        list
      />

      <Why
        title={
          <>
            {t("affiliate.whyTitleP1")}
            <br />
            {t("affiliate.whyTitleP2")}
          </>
        }
        content={content}
      />

      <Compare />
    </div>
  );
};

export default Affiliate;
