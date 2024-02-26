import Layout from "../components/layout/layout";

import Logos from "../components/logos/logos";
import Cards from "../components/cards/cards";
import About from "../components/about/about";
import backendAPI from "../api/backendAPI";

import { Helmet } from "react-helmet";

import Image1 from "../assets/image/homeNewGraph.png";
import Image1Light from "../assets/image/paymentHomeLight.webp";
// import Main from "../assets/image/main.svg";
import Main from "../assets/video/earth.mp4";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import PaymentCards from "../components/paymentCards/paymentCards";
import Prices from "../components/prices/prices";
import Reward from "../components/reward/reward";
import { useTheme } from "../context/themeContext/themeContext";
import HomeHero from "../components/homeHero/layout";

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const api = new backendAPI();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("affiliate")) {
      const paramValue = urlParams.get("affiliate");
      localStorage.setItem("affiliateJoined", paramValue);
      api.countAffiliate(paramValue);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Nefentus | Accept Crypto Payments Risk Free</title>
      </Helmet>
      <HomeHero
        heading={
          <>
            The Evolution <br />
            in Digital
            <div className="gradient">Transactions</div>
          </>
        }
        description={
          <>
            Nefentus is trusted by countless users, big and small, for seamless
            online and in-person payment acceptance, payout automation, and
            revenue growth.
          </>
        }
        button={
          <>
            <p>{t("home.heroButton")}</p>
          </>
        }
        home
        full
        video={Main}
      />

      <Logos />

      <Cards />

      <Layout
        subtitle={t("home.simplifySubtitle")}
        title={
          <>
            {t("home.heroTitle")}
            <br />
            {t("home.heroTitleP2")}
            <div className="gradient"> {t("home.heroTitleGradient")}</div>
          </>
        }
        description={<>{t("home.heroDescription")}</>}
        button={
          <>
            <p>{t("home.heroButton")}</p>
          </>
        }
        children={<Prices />}
        full
        store
      />

      <Layout
        subtitle={t("home.simplifySubtitle")}
        title={t("home.simplifyTitle")}
        description={t("home.simplifyDescription")}
        button={t("home.layoutButton")}
        image={theme === "dark" ? Image1 : Image1Light}
        reverse={true}
      />

      <About />

      {/* <Reviews /> */}

      {/* <Help /> */}

      {/* <PaymentCards /> */}
    </>
  );
};

export default Home;
